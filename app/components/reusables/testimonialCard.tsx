import React from 'react'

const TESTIMONIALS = [
  {
    id: 2,
    avatar: "AS",
    nm: "Aniket Singh",
    designation: "Software Developer",
    words: "Trishala is an amazing programmer with great debugging abilities. Her vast knowledge in the field and her eagerness to pick up new technologies, in my opinion, are what make her stand out and develop steadily. Her coworkers greatly benefit from her assistance, and she has been my last resort when faced with issues requiring advanced debugging abilities. Her attitude towards problem solving is very remarkable; she constantly strives to adhere to coding norms and best practices, but when time is of the essence, she knows how to work around quick fixes.",
  },
  {
    id: 1,
    avatar: "VS",
    nm: "Vaibhav Shukla",
    designation: "Senior Software Developer",
    words: "It's been an absolute pleasure managing Trishala over the past few years! Her knack for untangling the most twisted Android code and transforming it into something elegantly simple is nothing short of spectacular. Watching her dive headfirst into complex logic puzzles is like watching a detective crack a high-stakes case. Beyond her technical prowess, Trishala is a beacon of positivity and curiosity, always eager to discover the 'why' and 'how' behind everything. She brings joy and a touch of brilliance to our team every day!",
  },
  {
    id: 3,
    avatar: "KS",
    nm: "Kushagra Shukla",
    designation: "Software Developer",
    words: "I've worked with Trishala for over 2 years as a Software Developer at the same role and I can say without a doubt that she's a great engineer. She is a quick-learner who can pick up new technologies really fast and has the knowledge to be an all-rounder. It's always great to have her in Product discussions as well where she brings a fresh perspective in every idea she's involved in. On top of all this, she has a hearty personality and is a joy to work with. I'd recommend Trishala to anyone looking for a great talent in the Android or Web space.",
  }
]

const TestimonialCard = () => {
  return (
    <div className='flex mt-20 mx-10'>
      {TESTIMONIALS.map(testimonial => <div key={testimonial.id} className='flex flex-1 flex-col items-center bg-eerie mx-4 p-4 rounded-lg border-t-4 border-grullo'>
        <div className='bg-grullo w-32 aspect-square rounded-full flex items-center justify-cente my-6'>
          <div className='bg-black m-1 w-[95%] h-[95%] rounded-full flex items-center justify-center'>
            <p className='text-7xl'>{testimonial.avatar}</p>
          </div>
        </div>
        <p className='m-4'>{testimonial.nm}</p>
        <p className='mb-4 text-grullo'>{testimonial.designation}</p>
        <p className='text-sm m-2'>{testimonial.words}</p>
      </div>)}   
    </div>
  )
}

export default TestimonialCard