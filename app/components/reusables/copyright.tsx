import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';

const Copyright = () => {
  return (
    <footer className='w-full py-8 border-t border-white/5 bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-xs text-neutral-400 gap-4'>
      <div className='flex items-center gap-1.5'>
        <BiCopyright size={16} className='text-grullo' />
        <span>{new Date().getFullYear()} Trishla Kohade. All rights reserved.</span>
      </div>

      <div className='flex items-center gap-1'>
        <span>Crafted with</span>
        <FiHeart size={14} className='text-red-400 inline' />
        <span>using Next.js, React & Tailwind CSS</span>
      </div>

      <div className='flex items-center gap-4 text-xs'>
        <a href='#introduction' className='hover:text-grullo transition-colors'>Back to Top ↑</a>
        <a href='/Trishla_Kohade_FE.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-grullo transition-colors'>Resume PDF</a>
      </div>
    </footer>
  );
};

export default Copyright;