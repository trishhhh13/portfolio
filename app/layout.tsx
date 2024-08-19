import { ReactNode } from 'react';
import { Public_Sans } from 'next/font/google';
import './globals.css';

// Initialize fonts
const public_sans = Public_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${public_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
