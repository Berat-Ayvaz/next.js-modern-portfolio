// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'tr'],       // desteklenen diller
  defaultLocale: 'en'          // varsayılan dil
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'] // sadece sayfa isteklerini kapsar
};