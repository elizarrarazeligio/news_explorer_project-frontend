import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Búsqueda de token dentro de cookie de la solicitud
  const token = request.cookies.get(
    process.env.NEXT_PUBLIC_TOKEN_KEY as string
  )?.value;

  // Se valida si la ruta actual comienza con /saved-news
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/saved-news");

  // Redirección en caso de no haber token y estar en ruta protegida
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Petición continúa normalmente
  return NextResponse.next();
}

// Establecer en qué rutas debe ejecutarse el middleware
export const config = {
  matcher: ["/saved-news"],
};
