import React from 'react'
import Text from './reusables/text'
import TestimonialCards from './reusables/testimonialCard'

import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['cyrillic'] });

const Testimonial = () => {
  return (
    <div className='py-40'>
      <Text className={`${caveat.className}`}>What Other People Say</Text>
      <TestimonialCards/>
    </div>
  )
}

export default Testimonial