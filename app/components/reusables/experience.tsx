'use client';
import React from 'react';
import { BsAndroid } from 'react-icons/bs';
import { IoIosPhonePortrait } from 'react-icons/io';
import { SiReact, SiNextdotjs, SiSocketdotio } from 'react-icons/si';
import { FiLayers, FiServer, FiActivity } from 'react-icons/fi';

const expertiseArr = [
  { id: 1, nm: "React Native & Expo", icon: SiReact },
  { id: 2, nm: "Native Android & iOS", icon: BsAndroid },
  { id: 3, nm: "Modern React & Next.js", icon: SiNextdotjs },
  { id: 4, nm: "BFF & REST Architecture", icon: FiServer },
  { id: 5, nm: "Real-time Socket.IO", icon: SiSocketdotio },
  { id: 6, nm: "Performance & Observability", icon: FiActivity },
  { id: 7, nm: "UI/UX & Component Systems", icon: FiLayers },
];

const Experience = () => {
  return (
    <div className='mt-20 w-full overflow-hidden border-y border-white/5 bg-gradient-to-r from-raisin via-black to-raisin py-4'>
      <div className='flex whitespace-nowrap animate-loop-scroll'>
        {expertiseArr.map((expertise) => (
          <div
            key={expertise.id}
            className='inline-flex items-center gap-2.5 mx-6 text-sm font-semibold text-neutral-400 hover:text-grullo transition-colors'
          >
            <expertise.icon className='text-grullo' size={18} />
            <span>{expertise.nm}</span>
            <span className='ml-6 text-neutral-700'>✦</span>
          </div>
        ))}
        {expertiseArr.map((expertise) => (
          <div
            key={`dup-${expertise.id}`}
            className='inline-flex items-center gap-2.5 mx-6 text-sm font-semibold text-neutral-400 hover:text-grullo transition-colors'
          >
            <expertise.icon className='text-grullo' size={18} />
            <span>{expertise.nm}</span>
            <span className='ml-6 text-neutral-700'>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;