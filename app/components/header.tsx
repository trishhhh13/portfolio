'use client';
import React from 'react'
import Text from './reusables/text';
import { caveat } from '../layout';
import { BiDownArrow, BiDownload } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { FcDownload } from 'react-icons/fc';
import { FiDownload, FiDownloadCloud } from 'react-icons/fi';
import { GoDownload } from 'react-icons/go';
import { GrDownload } from 'react-icons/gr';

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
  const handleScroll = (targetId:string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // URL to the resume file in the public directory
    const resumeUrl = '/Trishala_Kohade_SDE.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Trishala_Kohade_SDE.pdf'; // Name of the file to be downloaded

    // Append the anchor to the body and click it to start the download
    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
  };

  return (
    <nav className='z-20 py-6 px-20 flex justify-between shadow-sm shadow-[#251e16] text-lg fixed bg-black w-full top-0 content-center'>
      <Text>Trishala Kohade</Text>
      <div className='flex items-center'>
        {HEADER_CONTENT.map((content) => <button onClick={() => handleScroll(content.conId)} key={content.id} className='hover:text-beaver ml-8'>{content.nm}</button>)}
        <GrDownload className='ml-20' onClick={() => downloadResume()}/>
      </div>
    </nav>
  )
}

export default Header