import { NextResponse } from 'next/server';

const protectedRoutes = ['/home', '/dashboard', '/carteira', '/news'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const hasSessionCookie = request.cookies.get('tradeNext-auth');

  if (hasSessionCookie) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/home/:path*', '/dashboard/:path*', '/carteira/:path*', '/news/:path*'],
};
