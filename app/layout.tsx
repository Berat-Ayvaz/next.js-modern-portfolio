'use client';
import { ReactNode } from 'react';
import { Outfit, Ovo } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

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
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
