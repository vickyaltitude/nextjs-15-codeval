import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersAccess = new Headers(request.headers);
  const cookies = request.cookies.get("theme");
  console.log(cookies);
  console.log(headersAccess.get("Authorization"));
  return new Response("<h1>Hello this is from profile</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
