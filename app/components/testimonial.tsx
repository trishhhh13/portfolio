import React from 'react';
import Text from './reusables/text';
import TestimonialCards from './reusables/testimonialCard';

const Testimonial = () => {
  return (
    <div className='py-28 md:py-36 px-6 md:px-[8%] w-full max-w-7xl mx-auto'>
      <div className='text-center mb-10'>
        <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
          Recommendations & Endorsements
        </span>
        <div className='mt-2'>
          <Text>What Colleagues Say</Text>
        </div>
        <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
          Feedback from leads and teammates I have had the privilege to build and innovate with.
        </p>
      </div>
      <TestimonialCards />
    </div>
  );
};

export default Testimonial;