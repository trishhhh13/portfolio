import React from 'react';
import Button from './reusables/button';
import { Caveat } from 'next/font/google';
import Image from 'next/image';

const caveat = Caveat({ subsets: ['cyrillic'] });

const About = () => {
  return (
    <div className='bg-raisin w-full py-32 flex px-[8%] justify-between about'>
      <div className='text-left flex flex-col flex-1 animate-slide-right about-content'>
        <p className={`${caveat.className} text-4xl leading-relaxed`}>Trishala Kohade</p>
        <p className={`${caveat.className} text-4xl leading-relaxed text-grullo`}>Frontend Developer</p>
        <p className='mt-6'>
          I&apos;m a Software Engineer with two years of experience in front-end development, mobile apps, and performance optimization—basically, I turn caffeine into code and bugs into features. I live for creating software that&apos;s smoother than my morning coffee and more engaging than a cat video marathon.
        </p>
        <Button title="Contact Me" className='about-content' scrollId='contact' />
      </div>
      <div className='flex flex-1 px-10 justify-end animate-slide-left about-img'>
        <Image src="/me.jpeg" alt="Trishala Kohade" width={100} height={100} className='w-80 aspect-square rounded-full overflow-hidden object-cover'/>
      </div>
    </div>
  );
}

export default About;
