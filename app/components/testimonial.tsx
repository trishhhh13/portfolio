import React from 'react'
import Text from './reusables/text'
import { caveat } from '../layout'
import TestimonialCards from './reusables/testimonialCard'

const Testimonial = () => {
  return (
    <div className='py-40'>
      <Text className={`${caveat.className}`}>What Other People Say</Text>
      <TestimonialCards/>
    </div>
  )
}

export default Testimonial