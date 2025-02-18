import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //first method for redirect
  //return NextResponse.redirect(new URL("/", request.url));
  const response = NextResponse.next();
  //second method for redirect
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/about", request.nextUrl));
  }

  return response;
}

//include the below config when u use first method

/* export const config = {
  matcher: "/profile",
};
 */
