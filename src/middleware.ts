import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (request.method === "GET" && url.pathname.match(/^\/api\/v1\/model\/?$/)) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/api/v1/model/:path*",
};
