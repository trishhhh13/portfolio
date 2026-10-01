'use client';
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { LiaLinkedin } from 'react-icons/lia';
import { SiLeetcode } from 'react-icons/si';

const HANDLES = [
  {
    id: 1,
    icon: LiaLinkedin,
    size: 24,
    nm: "LinkedIn",
    href: "https://www.linkedin.com/in/Trishla-kohade/"
  },
  {
    id: 2,
    icon: BsGithub,
    size: 20,
    nm: "GitHub",
    href: "https://github.com/trishhhh13"
  },
  {
    id: 3,
    icon: SiLeetcode,
    size: 19,
    nm: "LeetCode",
    href: "https://leetcode.com/u/trishhhh_13/"
  },
  {
    id: 4,
    icon: BsWhatsapp,
    size: 20,
    nm: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=917389178436"
  },
  {
    id: 5,
    icon: CgMail,
    size: 24,
    nm: "Email",
    href: "mailto:trishlakohade4@gmail.com"
  }
];

const Social = () => {
  return (
    <div className='flex items-center gap-3 bg-neutral-900/90 border border-grullo/30 px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md'>
      {HANDLES.map((handle) => (
        <Link
          key={handle.id}
          href={handle.href}
          target='_blank'
          rel='noopener noreferrer'
          className='w-10 h-10 rounded-full flex items-center justify-center text-grullo hover:text-white hover:bg-white/10 transition-all duration-200 relative group'
          aria-label={handle.nm}
        >
          <handle.icon size={handle.size} />
          <span className='absolute -bottom-8 scale-0 group-hover:scale-100 transition-all text-[11px] bg-black text-white px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap border border-white/10'>
            {handle.nm}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;