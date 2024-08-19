'use client';
import React from 'react';
import Text from './reusables/text';
import Social from './reusables/social';
import Experience from './reusables/experience';
import Button from './reusables/button';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({ subsets: ['latin'] });

const Introduction = () => {
  return (
    <div className='flex text-3xl flex-col w-full mt-[20%] items-center'>
      <p className='mb-6'>
        Hey! I&apos;m <span className='text-grullo'>Trishala Kohade</span>
      </p>

      <Text className={`${public_sans.className}`}>I&apos;m A Front End Developer</Text>
      <p className='text-lg mt-10'>
        I can build user interfaces for web sites and mobile applications with <span className='text-grullo ml-1'>React JS</span> and <span className='text-grullo ml-1'>React Native</span>
      </p>
      <p className='text-lg'>I love front-end development.</p>
      <Button title="Hire Me" className='self-center' scrollId='contact' />
      
      <Social />
      <Experience />
    </div>
  );
}

export default Introduction;
