import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
    const hasXsrf = request.cookies.has("XSRF-TOKEN");
    const hasSession = request.cookies.has("laravel_session");

    const isAuthenticated = hasXsrf || hasSession
    
    const {pathname} = request.nextUrl;
    const isDashPage = pathname.startsWith("/dash");
    const isAuthPage = pathname.startsWith("/auth");

    if (isDashPage && !isAuthenticated ) {
        return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    if (isAuthPage && isAuthenticated ) {
        return NextResponse.redirect(new URL("/dash", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dash/:path*", "/auth/:path*"],
};