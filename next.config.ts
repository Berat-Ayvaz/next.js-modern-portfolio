// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
