<<<<<<< HEAD
import { ReactNode } from 'react';
import { Outfit, Ovo } from 'next/font/google';
import '../globals.css';
=======
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ovo',
});

type Props = {
  children: ReactNode;
<<<<<<< HEAD
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
      <body>
        {children}
=======
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  let messages;
  try {

  } catch () {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
>>>>>>> 52cc42667ae2d6b6dd98dffea1bec6ad90454258
      </body>
    </html>
  );
}
