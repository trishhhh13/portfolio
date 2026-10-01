import React from 'react';
import Button from './reusables/button';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import { FiMapPin, FiAward, FiSmartphone, FiDatabase, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

const caveat = Caveat({ subsets: ['cyrillic'] });

const HIGHLIGHTS = [
  { icon: FiMapPin, title: "Location", detail: "Delhi, India" },
  { icon: HiOutlineAcademicCap, title: "Education", detail: "B.Tech CSE (9.29 GPA)" },
  { icon: FiSmartphone, title: "Mobile Core", detail: "React Native, Expo, Android SDK" },
  { icon: FiDatabase, title: "Backend & Data", detail: "BFF APIs, Drizzle ORM, MongoDB" },
];

const About = () => {
  return (
    <div className='bg-[#161514] w-full py-24 md:py-32 px-6 md:px-[10%] flex flex-col lg:flex-row items-center justify-between gap-12 border-y border-white/5'>
      {/* Profile Image & Badge */}
      <div className='flex flex-col items-center justify-center relative flex-1 max-w-sm'>
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-grullo via-umber to-neutral-700 shadow-2xl shadow-black/80'>
          <div className='w-full h-full rounded-[22px] overflow-hidden bg-neutral-900'>
            <Image 
              src="/me.jpeg" 
              alt="Trishla Kohade" 
              width={400} 
              height={400} 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
              priority
            />
          </div>
        </div>

        {/* Floating Quick Card */}
        <div className='mt-6 w-full bg-raisin/90 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md'>
          <div className='grid grid-cols-2 gap-3 text-left'>
            {HIGHLIGHTS.map((item, index) => (
              <div key={index} className='flex items-start gap-2.5'>
                <item.icon className='text-grullo mt-0.5 shrink-0' size={18} />
                <div>
                  <p className='text-xs text-neutral-400 font-medium'>{item.title}</p>
                  <p className='text-xs font-semibold text-neutral-200'>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative & Details */}
      <div className='text-left flex flex-col flex-1 max-w-2xl'>
        <span className='text-grullo text-sm font-semibold uppercase tracking-widest mb-1'>
          About Me
        </span>
        <h2 className={`${caveat.className} text-4xl md:text-5xl leading-tight font-bold text-white mb-1`}>
          Trishla Kohade
        </h2>
        <p className={`${caveat.className} text-2xl md:text-3xl text-grullo mb-6`}>
          Software Development Engineer II
        </p>
        
        <p className='text-neutral-300 leading-relaxed text-base md:text-lg mb-4'>
          I am a Software Development Engineer II with over 4 years of deep engineering experience across cross-platform mobile development and high-scale modern web applications. Currently at <span className='text-grullo font-semibold'>Nudgity Labs</span> in Delhi, I own frontend and mobile feature development with React and React Native—driving initiatives from architectural inception to production release.
        </p>

        <p className='text-neutral-300 leading-relaxed text-base md:text-lg mb-6'>
          Previously at <span className='text-grullo font-semibold'>HPS Lab Designs (AJJAS)</span>, I led cross-platform mobile and frontend engineering for 50K+ active users, architected BFF REST services processing 1M+ requests/month, and delivered a 98%+ crash-free track record while mentoring engineering teams.
        </p>

        {/* Key Strengths Checklist */}
        <div className='space-y-2.5 mb-8'>
          <div className='flex items-center gap-3 text-sm text-neutral-300'>
            <FiCheckCircle className='text-grullo shrink-0' size={18} />
            <span>End-to-end notification systems, user flows, and production releases</span>
          </div>
          <div className='flex items-center gap-3 text-sm text-neutral-300'>
            <FiCheckCircle className='text-grullo shrink-0' size={18} />
            <span>Smooth migrations across Expo SDK major versions (SDK 50 to 57)</span>
          </div>
          <div className='flex items-center gap-3 text-sm text-neutral-300'>
            <FiCheckCircle className='text-grullo shrink-0' size={18} />
            <span>Crash analytics & observability (Firebase Crashlytics, Amplitude)</span>
          </div>
          <div className='flex items-center gap-3 text-sm text-neutral-300'>
            <FiCheckCircle className='text-grullo shrink-0' size={18} />
            <span>Custom database architecture & schemas using Drizzle ORM and MongoDB</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Button title="Get in Touch" scrollId='contact' className='!my-0' />
          <a
            href="/Trishla_Kohade_FE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-transparent hover:bg-white/5 text-neutral-300 text-base font-semibold px-6 py-2 rounded-md border border-grullo/40 hover:border-grullo transition-all'
          >
            View Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
