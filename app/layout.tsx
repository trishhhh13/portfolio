import { ReactNode } from 'react';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trishla Kohade | Software Development Engineer II (Frontend & Mobile)',
  description: 'Portfolio of Trishla Kohade, SDE II specializing in React, React Native, Next.js, and Android engineering.',
  keywords: ['Trishla Kohade', 'SDE II', 'Frontend Developer', 'React Native', 'Next.js', 'Android', 'Mobile Developer'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito_sans.className} bg-[#0e0d0c] text-white selection:bg-[#a9947d] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
