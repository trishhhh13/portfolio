import { ReactNode } from 'react';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

// Initialize fonts
const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
