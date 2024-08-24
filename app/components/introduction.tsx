'use client';
import React from 'react';
import Text from './reusables/text';
import Social from './reusables/social';
import Experience from './reusables/experience';
import Button from './reusables/button';
import { Nunito_Sans } from 'next/font/google';

const nunito_sans = Nunito_Sans({ subsets: ['latin'] });

const Introduction = () => {
  return (
    <div className='flex text-3xl flex-col w-full mt-60 items-center intro'>
      <p className='mb-6'>
        Hey! I&apos;m <span className='text-grullo'>Trishala Kohade</span>
      </p>

      <Text className={`${nunito_sans.className}`}>I&apos;m a Front End Developer</Text>
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
