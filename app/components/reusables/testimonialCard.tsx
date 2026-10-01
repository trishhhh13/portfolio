import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    id: 1,
    avatar: "VS",
    nm: "Vaibhav Shukla",
    designation: "Senior Software Developer / Lead",
    relation: "Managed Trishla directly at HPS Lab Designs (AJJAS)",
    words: "It's been an absolute pleasure managing Trishla over the past few years! Her knack for untangling the most twisted Android code and transforming it into something elegantly simple is nothing short of spectacular. Watching her dive headfirst into complex logic puzzles is like watching a detective crack a high-stakes case. Beyond her technical prowess, Trishla is a beacon of positivity and curiosity, always eager to discover the 'why' and 'how' behind everything. She brings joy and a touch of brilliance to our team every day!",
  },
  {
    id: 2,
    avatar: "AS",
    nm: "Aniket Singh",
    designation: "Software Developer",
    relation: "Colleague at HPS Lab Designs",
    words: "Trishla is an amazing programmer with great debugging abilities. Her vast knowledge in the field and her eagerness to pick up new technologies, in my opinion, are what make her stand out and develop steadily. Her coworkers greatly benefit from her assistance, and she has been my last resort when faced with issues requiring advanced debugging abilities. Her attitude towards problem solving is very remarkable; she constantly strives to adhere to coding norms and best practices.",
  },
  {
    id: 3,
    avatar: "KS",
    nm: "Kushagra Shukla",
    designation: "Software Developer",
    relation: "Collaborated for 2+ years",
    words: "I've worked with Trishla for over 2 years as a Software Developer and I can say without a doubt that she's a great engineer. She is a quick-learner who can pick up new technologies really fast and has the knowledge to be an all-rounder. It's always great to have her in product discussions as well where she brings a fresh perspective in every idea she's involved in. On top of all this, she has a hearty personality and is a joy to work with.",
  }
];

const TestimonialCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left'>
      {TESTIMONIALS.map((testimonial) => (
        <div
          key={testimonial.id}
          className='bg-raisin/80 hover:bg-neutral-800/90 border border-white/5 hover:border-grullo/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-xl relative group'
        >
          <div className='absolute top-6 right-6 text-grullo/20 group-hover:text-grullo/40 transition-colors'>
            <FaQuoteLeft size={36} />
          </div>

          <div>
            {/* Stars */}
            <div className='flex gap-1 text-grullo mb-4'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            <p className='text-sm text-neutral-300 leading-relaxed italic mb-8 relative z-10'>
              &ldquo;{testimonial.words}&rdquo;
            </p>
          </div>

          {/* Author info */}
          <div className='flex items-center gap-4 pt-4 border-t border-white/5'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-tr from-umber to-grullo flex items-center justify-center font-bold text-black text-sm shadow-md'>
              {testimonial.avatar}
            </div>
            <div>
              <p className='font-bold text-white text-base'>{testimonial.nm}</p>
              <p className='text-xs text-grullo font-medium'>{testimonial.designation}</p>
              <p className='text-[11px] text-neutral-500 mt-0.5'>{testimonial.relation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;