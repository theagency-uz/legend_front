import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { jwtDecode } from "jwt-decode";

import { tokenKey } from "./server/request";

import { UserRole } from "./types/admin/user";

const routes = [
  "/admin",
  "/admin/products",
  "/admin/dashboard",
  "/admin/analytics",
  "/admin/orders",
  "/admin/customers",
  "/admin/settings",
];

const protectedRoutes = [...routes];

export async function middleware(request: NextRequest) {
  try {
    let isUserAuthenticated = false;

    let cookie = request.cookies.get("legend_auth_token");

    if (cookie?.value && cookie.name === tokenKey) {
      const user = jwtDecode(cookie.value);

      if (user.role === UserRole.Admin) {
        isUserAuthenticated = true;
      }
    }

    console.log(isUserAuthenticated);
    if (
      !isUserAuthenticated &&
      protectedRoutes.includes(request?.nextUrl?.pathname)
    ) {
      const absoluteUrl = new URL("/admin/login", request.nextUrl.origin);
      return NextResponse.redirect(absoluteUrl.toString());
    }

    return NextResponse.next();
  } catch (err) {
    const absoluteUrl = new URL("/admin/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}

export const config = {
  matcher: [...routes],
};
