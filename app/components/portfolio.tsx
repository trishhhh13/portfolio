import React from 'react'
import Text from './reusables/text'
import Link from 'next/link'
import Image from 'next/image'

const WORK = [
  { nm: "Ajjas", img: "/ajjasApp.jpg", link: "https://play.google.com/store/apps/details?id=com.ajjas" },
  { nm: "Ajjas Website", img: "/ajjaswebsite.webp", link: "https://www.ajjas.com/" },
  { nm: "Ascian Solutions", img: "/ascian.png", link: "https://www.ascian.in/" },
  { nm: "Personal Project: Schedify", img: "/schedify.png", link: "https://github.com/trishhhh13/Schedify" },
  { nm: "Personal Project: JSON Linter", img: "/jsonlinter.png", link: "https://jsonlint-inky.vercel.app/" },
]

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center my-32'>
    <div className='max-w-[60%] mb-20'>
      <Text className={`mb-6`}>My Last Work</Text>
      <p>At HPS Lab Designs, I enhanced the CRM system and developed a React Native mobile app with a 97.6% crash-free rate, introducing features like geofencing and Safe Parking. Previously, as an Android Developer Intern at Ascian Solutions, I improved app responsiveness and reduced data retrieval times by 40%, contributing to a 98% crash-free release. My efforts in both roles significantly boosted user engagement and satisfaction.</p>
      
    </div>
    <div className="flex flex-wrap justify-center">
        {WORK.map((detail, index) => {
          return (
            <Link key={index} href={detail.link} className='w-[25%] m-10 overflow-hidden'>
              <div className='overflow-hidden rounded-3xl'>
                <Image width={100} height={100} src={detail.img} className='w-full aspect-square rounded-3xl hover:scale-125 transition-all' alt={detail.nm} />
              </div>
              <p className='text-grullo mt-2'>{detail.nm}</p>
            </Link>
          )
        }) }
      </div>
    </div>
  )
}

export default Portfolio