'use client';
import React, { useState } from 'react';
import Text from './reusables/text';
import { FiDownload } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const HEADER_CONTENT = [
  { id: 1, nm: "Home", conId: "introduction" },
  { id: 2, nm: "About", conId: "about" },
  { id: 3, nm: "Experience", conId: "experience" },
  { id: 4, nm: "Skills", conId: "skills" },
  { id: 5, nm: "Projects", conId: "portfolio" },
  { id: 6, nm: "Services", conId: "services" },
  { id: 7, nm: "Testimonials", conId: "testimonial" },
  { id: 8, nm: "Contact", conId: "contact" },
];

const Header = () => {
  const [showHeaderItems, setShowHeaderItems] = useState(false);

  const handleScroll = (targetId: string) => {
    if (showHeaderItems) setShowHeaderItems(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const resumeUrl = '/Trishla_Kohade_FE.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Trishla_Kohade_FE.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMenuClick = (show?: boolean) => {
    setShowHeaderItems(show !== undefined ? show : !showHeaderItems);
  };

  return (
    <nav className='sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/85 border-b border-white/10 w-full transition-all duration-300'>
      <div 
        onClick={() => handleScroll('introduction')} 
        className='cursor-pointer text-left flex items-center gap-2 group'
      >
        <Text className='headerText text-2xl md:text-3xl font-bold'>Trishla Kohade</Text>
        <span className='hidden sm:inline-block text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-grullo/20 text-grullo border border-grullo/30 ml-2'>
          SDE II
        </span>
      </div>

      <div className='hidden lg:flex items-center gap-6'>
        {HEADER_CONTENT.map((content) => (
          <button 
            onClick={() => handleScroll(content.conId)} 
            key={content.id} 
            className='text-neutral-300 hover:text-grullo transition-colors duration-200 text-sm md:text-base font-medium relative group'
          >
            {content.nm}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-grullo transition-all duration-300 group-hover:w-full' />
          </button>
        ))}
        
        <button
          onClick={downloadResume}
          className='flex items-center gap-2 bg-gradient-to-r from-umber to-[#74624d] hover:brightness-110 text-white text-sm font-semibold px-4 py-2 rounded-full border border-grullo/30 shadow-md hover:shadow-grullo/20 transition-all duration-300 ml-4'
        >
          <FiDownload size={16} />
          <span>Resume</span>
        </button>
      </div>

      <div className='flex items-center lg:hidden gap-3'>
        <button
          onClick={downloadResume}
          className='flex items-center gap-1.5 bg-umber/80 text-white text-xs px-3 py-1.5 rounded-full border border-grullo/30'
        >
          <FiDownload size={14} />
          <span>Resume</span>
        </button>
        <button 
          onClick={() => handleMenuClick()} 
          className='text-neutral-300 hover:text-white p-1'
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu size={28}/>
        </button>
      </div>

      {showHeaderItems && (
        <div className='fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center px-6 py-12'>
          <button 
            onClick={() => handleMenuClick(false)} 
            className='absolute right-6 top-6 text-neutral-400 hover:text-white p-2'
            aria-label="Close menu"
          >
            <RxCross2 size={30} />
          </button>
          
          <div className='flex flex-col gap-6 items-center text-center text-xl text-neutral-200'>
            {HEADER_CONTENT.map((content) => (
              <button 
                onClick={() => handleScroll(content.conId)} 
                key={content.id} 
                className='hover:text-grullo transition-colors py-1'
              >
                {content.nm}
              </button>
            ))}
            <button
              onClick={() => {
                downloadResume();
                handleMenuClick(false);
              }}
              className='mt-4 flex items-center gap-2 bg-umber text-white px-6 py-2.5 rounded-full border border-grullo/30'
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header