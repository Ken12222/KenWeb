import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/admin/dashboard", "admin/dashboard/projects"];
  const publicRoutes = ["/", "/projects", "/contact", "/admin"];
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (isPublicRoute && session?.value && !isProtectedRoute) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  }

  if (!session?.value && isProtectedRoute) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }
}
