<<<<<<< HEAD
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
=======
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
