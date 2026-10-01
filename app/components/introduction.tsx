'use client';
import React from 'react';
import Text from './reusables/text';
import Social from './reusables/social';
import Experience from './reusables/experience';
import { Nunito_Sans } from 'next/font/google';
import { FiDownload, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "50K+", label: "Active Mobile Users" },
  { value: "1M+", label: "Monthly API Requests" },
  { value: "98%+", label: "Crash-Free Rate" },
];

const Introduction = () => {
  const handleScroll = (targetId: string) => {
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

  return (
    <div className='flex flex-col w-full pt-16 md:pt-24 items-center intro px-4 max-w-6xl mx-auto'>
      {/* Role Pill */}
      <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-umber/30 to-grullo/20 border border-grullo/40 text-grullo text-xs md:text-sm font-semibold tracking-wide mb-6 animate-pulse'>
        <span className='w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping' />
        <span>SDE II @ Nudgity Labs • Ex-AJJAS (HPS Lab Designs)</span>
      </div>

      {/* Main Salutation */}
      <p className='text-xl md:text-2xl text-neutral-400 font-light mb-2'>
        Hello, I&apos;m
      </p>

      <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-4'>
        <span className='text-white'>Trishla </span>
        <span className='text-grullo drop-shadow-sm'>Kohade</span>
      </h1>

      {/* Headline Role */}
      <div className='mb-6'>
        <Text className='text-2xl md:text-4xl text-neutral-200'>Software Development Engineer II</Text>
      </div>

      {/* Subtitle / Bio summary */}
      <p className='text-base md:text-xl text-neutral-300 max-w-3xl leading-relaxed text-center font-normal px-2'>
        Senior Frontend & Mobile Engineer crafting resilient, cross-platform apps with{' '}
        <span className='text-grullo font-semibold'>React Native & Expo</span>, native{' '}
        <span className='text-grullo font-semibold'>Android</span>, and high-performance{' '}
        <span className='text-grullo font-semibold'>React & Next.js</span> web ecosystems.
      </p>

      {/* CTAs */}
      <div className='flex flex-wrap items-center justify-center gap-4 mt-8'>
        <button
          onClick={() => handleScroll('experience')}
          className='flex items-center gap-2 bg-gradient-to-r from-umber to-[#74624d] hover:brightness-110 text-white font-medium px-7 py-3 rounded-full border border-grullo/40 shadow-lg shadow-black/40 transition-all duration-300'
        >
          <FiBriefcase size={18} />
          <span>Work Experience</span>
          <FiArrowRight size={16} />
        </button>

        <button
          onClick={() => handleScroll('portfolio')}
          className='flex items-center gap-2 bg-raisin hover:bg-neutral-800 text-neutral-200 font-medium px-6 py-3 rounded-full border border-neutral-700 hover:border-grullo/50 transition-all duration-300'
        >
          <span>View Featured Projects</span>
        </button>

        <button
          onClick={downloadResume}
          className='flex items-center gap-2 bg-transparent hover:bg-white/5 text-neutral-300 font-medium px-6 py-3 rounded-full border border-neutral-700 hover:border-grullo/50 transition-all duration-300'
        >
          <FiDownload size={18} className='text-grullo' />
          <span>Resume</span>
        </button>
      </div>

      {/* Impact Stats Grid */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-14 px-2'>
        {STATS.map((stat, i) => (
          <div
            key={i}
            className='bg-gradient-to-b from-raisin/80 to-eerie/80 p-5 rounded-2xl border border-white/5 hover:border-grullo/30 transition-all duration-300 shadow-md text-center group'
          >
            <p className='text-3xl md:text-4xl font-extrabold text-grullo group-hover:scale-105 transition-transform duration-300'>
              {stat.value}
            </p>
            <p className='text-xs md:text-sm text-neutral-400 mt-1 font-medium'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Social Icons */}
      <div className='mt-8'>
        <Social />
      </div>

      {/* Domain Ticker */}
      <Experience />
    </div>
  );
};

export default Introduction;
