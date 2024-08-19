import React from 'react'
import Text from './reusables/text'
import { caveat } from '../layout'
import { BiData } from 'react-icons/bi'
import { BsAndroid } from 'react-icons/bs'
import { SiFrontendmentor } from 'react-icons/si'
import { GiPlatform } from 'react-icons/gi'

const SERVICES = [{
  id: 1,
  icon: <BsAndroid size={34}/>,
  nm: "App Development",
  desc: "I create high-performance mobile applications using technologies like React Native, ensuring smooth user experiences and innovative features that meet client needs.",
},
{
  id: 2,
  icon: <SiFrontendmentor size={34}/>,
  nm: "Front-End Design",
  desc: "I design and optimize user-friendly interfaces, leveraging HTML, CSS, and JavaScript to enhance visual appeal and performance, leading to increased user engagement."
},
{
  id: 3,
  icon: <BiData size={34}/>,
  nm: "Data Management",
  desc: "I implement effective data handling and integration solutions, utilizing technologies such as Node.js to standardize and secure data across platforms for seamless functionality."
},
{ 
  id: 4,
  icon: <GiPlatform size={34}/>,
  nm: "Cross-Functional",
  desc: "I work closely with diverse teams to ensure cohesive development processes and successful project outcomes, from CRM enhancements to feature implementation in mobile apps."
}]

const Services = () => {
  return (
    <div className='bg-eerie w-full py-40'>
      <Text>What I Do For Clients</Text>
      <p className='px-[10%] pt-10'>I deliver tailored software solutions by enhancing user experiences through optimized performance and innovative features. My focus is on creating efficient, high-quality applications that meet client needs and exceed expectations.</p>
      <div className='flex text-left w-full justify-around mt-24'>
        {SERVICES.map(srvc => <div key={srvc.id} className='bg-raisin hover:bg-neutral-700 max-w-[20%] p-6 rounded-xl'>
          {srvc.icon}
          <p className='mt-10 text-2xl mb-4'>{srvc.nm}</p>
          <p>{srvc.desc}</p>
        </div>)}
      </div>
    </div>
  )
}

export default Services