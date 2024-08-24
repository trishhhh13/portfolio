'use client';
import React, { useState } from 'react'
import Text from './reusables/text';
import { GrDownload } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const HEADER_CONTENT = [
  {
    id: 1,
    nm: "Home",
    conId: "introduction"
  },
  {
    id: 2,
    nm: "About",
    conId: "about"
  },
  {
    id: 3,
    nm: "Portfolio",
    conId: "portfolio",
  },
  {
    id: 4,
    nm: "Services",
    conId: "services",
  },
  {
    id: 5,
    nm: "Testimonials",
    conId: "testimonial",
  },
  {
    id: 6,
    nm: "Contact",
    conId: "contact",
  }
]

const Header = () => {

  const [showHeaderItems, setShowHeaderItems] = useState(false)

  const handleScroll = (targetId:string) => {
    if (showHeaderItems) setShowHeaderItems(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const resumeUrl = '/Trishala_Kohade_SDE.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Trishala_Kohade_SDE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMenuClick = (show?: boolean) => {
    setShowHeaderItems(show ? show : !showHeaderItems);
  };

  return (
    <nav className='z-20 py-6 px-10 flex justify-between shadow-sm shadow-[#251e16] text-lg bg-black w-full top-0 content-center items-center'>
      <Text className='headerText'>Trishala Kohade</Text>
      <div className='flex items-center deskHeader'>
        {HEADER_CONTENT.map((content) => <button onClick={() => handleScroll(content.conId)} key={content.id} className='hover:text-grullo ml-8'>{content.nm}</button>)}
        <GrDownload className='ml-20' onClick={() => downloadResume()}/>
      </div>
      <div className='flex items-center mobileHeader' onClick={() => handleMenuClick()}>
        <GiHamburgerMenu size={34}/>
      </div>
      {showHeaderItems ? <div className='bg-eerie top-0 bottom-0 left-0 right-0 fixed'>
        <div onClick={() => handleMenuClick(false)}>
          <RxCross2 className='absolute right-5 top-5' size={24}/>
        </div>
         <div className='flex flex-col h-full justify-evenly text-2xl text-grullo'>
          {HEADER_CONTENT.map((content) => <button onClick={() => handleScroll(content.conId)} key={content.id} className='hover:text-grullo'>{content.nm}</button>)}
        </div>
      </div> : null}
    </nav>
  )
}

export default Header