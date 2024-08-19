import React from 'react'
import { caveat } from '../layout'
import Button from './reusables/button'

const About = () => {
  return (
    <div className='bg-raisin w-full py-32 flex px-[8%] justify-between'>
      <div className='text-left flex flex-col flex-1 animate-slide-right'>
        <p className={`${caveat.className} text-4xl leading-relaxed`}>Trishala Kohade</p>
        <p className={`${caveat.className} text-4xl leading-relaxed text-grullo`}>Frontend Developer</p>
        <p className='mt-6'>I'm a Software Engineer with two years of experience in front-end development, mobile apps, and performance optimization—basically, I turn caffeine into code and bugs into features. I live for creating software that’s smoother than my morning coffee and more engaging than a cat video marathon.</p>
        <Button title="Contact Me" scrollId='contact' />
      </div>
      <div className='flex flex-1 px-10 justify-end animate-slide-left'>
        <img className='w-80 aspect-square rounded-full overflow-hidden object-cover ' src="me.jpeg"  alt="Lamp"/>
      </div>
    </div>
  )
}

export default About