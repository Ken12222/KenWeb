import { PrismaClient } from "@/generated/prisma";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret_Key = process.env.SESSION_KEY;
const encodedKey = new TextEncoder().encode(secret_Key);
const prisma = new PrismaClient();

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createSession(userID) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

  const sessionDataExist = await prisma.sessions.findFirst({
    where: {
      admin_id: userID,
    },
  });

  if (sessionDataExist) {
    await prisma.sessions.delete({
      where: {
        admin_id: userID,
      },
    });
  }

  const sessionData = await prisma.sessions.create({
    data: {
      admin_id: userID,
      expiresAt: expiresAt,
    },
  });

  const sessionID = sessionData.id;
  const encryptSessionData = await encrypt({ sessionID, expiresAt });

  const cookieStore = await cookies();
  const sessionExists = cookieStore.get("session");

  const decryptSession = sessionExists
    ? await decrypt(sessionExists?.value)
    : "";

  if (sessionExists) {
    await prisma.sessions.delete({
      where: {
        id: decryptSession.data.sessionID,
      },
    });
    const unsetSession = cookieStore.set("session", null, {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });

    if (unsetSession) {
      cookieStore.set("session", encryptSessionData, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: "lax",
        path: "/",
      });
    }
  }

  cookieStore.set("session", encryptSessionData, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
