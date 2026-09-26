import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
    const hasSession = request.cookies.has("laravel-session");

    const { pathname } = request.nextUrl;
    const isDashPage = pathname.startsWith("/dashboard");
    const isAuthPage = pathname.startsWith("/auth");

    if (pathname === "/auth") {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (isDashPage && !hasSession) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (isAuthPage && hasSession) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*"]
};
