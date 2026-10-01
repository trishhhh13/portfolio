import React from 'react';
import Text from './reusables/text';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { FiAward, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
  return (
    <div className='py-24 md:py-32 px-6 md:px-[8%] w-full max-w-6xl mx-auto'>
      <div className='text-center mb-14'>
        <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
          Academic Background
        </span>
        <div className='mt-2'>
          <Text>Education</Text>
        </div>
      </div>

      <div className='bg-gradient-to-r from-raisin via-[#201d1a] to-raisin border border-white/10 hover:border-grullo/40 rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-300 max-w-3xl mx-auto text-left relative overflow-hidden'>
        <div className='absolute -right-10 -bottom-10 w-44 h-44 bg-grullo/10 rounded-full blur-2xl pointer-events-none' />

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10'>
          <div className='flex items-center gap-4'>
            <div className='p-3.5 rounded-2xl bg-grullo/20 text-grullo border border-grullo/30'>
              <HiOutlineAcademicCap size={32} />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-white'>
                Technocrats Institute of Technology
              </h3>
              <p className='text-grullo font-medium text-lg mt-0.5'>
                Bachelor of Technology in Computer Science
              </p>
            </div>
          </div>

          <div className='flex flex-col md:items-end gap-1 text-xs text-neutral-400'>
            <div className='flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-white/5'>
              <FiCalendar size={13} className='text-grullo' />
              <span>2019 – 2023</span>
            </div>
            <div className='flex items-center gap-1.5 mt-1'>
              <FiMapPin size={13} className='text-grullo' />
              <span>Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center gap-2 px-4 py-2 rounded-xl bg-grullo/10 border border-grullo/30'>
            <FiAward className='text-grullo' size={20} />
            <span className='text-sm text-neutral-300 font-medium'>Graduated with Outstanding Score:</span>
            <span className='text-base font-extrabold text-grullo'>9.29 / 10.00 GPA</span>
          </div>

          <div className='flex flex-wrap gap-2 text-xs text-neutral-400'>
            <span className='px-2.5 py-1 bg-black/40 rounded-md border border-neutral-800'>Algorithms</span>
            <span className='px-2.5 py-1 bg-black/40 rounded-md border border-neutral-800'>Data Structures</span>
            <span className='px-2.5 py-1 bg-black/40 rounded-md border border-neutral-800'>Database Systems</span>
            <span className='px-2.5 py-1 bg-black/40 rounded-md border border-neutral-800'>OOP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
