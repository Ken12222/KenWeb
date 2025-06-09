"server only";

import { cookies } from "next/headers";

export async function Cookyes(request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  // const path = request.nextUrl.pathname;
  // const protectedRoutes = ["/admin/dashboard", "/admin/dashboard/project"];
  // const publicRoutes = ["/admin", "/", "/projects", "/contact"];
  // const isProtectedRoute = protectedRoutes.includes(path);
  // const isPublicRoute = publicRoutes.includes(path);

  if (!session?.value) {
    return redirect("/admin");
  }

  // if (session?.value && isPublicRoute) {
  //   return redirect("/admin");
  // }
}
