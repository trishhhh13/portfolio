// app/layout.tsx (or _app.tsx if using the old file structure)

import { Public_Sans, Caveat } from 'next/font/google';
import './globals.css';

// Initialize fonts
export const caveat = Caveat({ subsets: ['cyrillic'] });
export const public_sans = Public_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${public_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
