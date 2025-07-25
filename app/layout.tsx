import { ReactNode } from 'react';
import { Outfit, Ovo } from 'next/font/google';
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
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
