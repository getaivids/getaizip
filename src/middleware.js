import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "d60d138a-6bf7-49ff-a1c5-aa4553f98a13");
  requestHeaders.set("x-createxyz-project-group-id", "21225766-186b-47e1-bed2-4f3a95115f6e");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}