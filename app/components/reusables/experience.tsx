import React from 'react'
import { BsAndroid } from 'react-icons/bs'
import { IoIosPhonePortrait } from 'react-icons/io'
import { SiBackendless, SiFrontendmentor } from 'react-icons/si'

const expertiseArr = [{
  id: 1,
  nm: "Frontend",
  icon: SiFrontendmentor,

},
{
  id: 2,
  nm: "Backend",
  icon: SiBackendless,

},
{
  id: 3,
  nm: "Android",
  icon: BsAndroid,

},
{
  id: 4,
  nm: "iOS",
  icon: IoIosPhonePortrait,

}]

const Experience = () => {
  return (
    <div className='mt-24 whitespace-nowrap w-full bg-eerie py-5 items-center overflow-hidden'>
      <div className='animate-loop-scroll inline-block'>
        {expertiseArr.map((expertise) => <p className='items-center inline-block w-96' key={expertise.id}>{<expertise.icon className='inline-block'/>} <span className='ml-2 inline-block'>{expertise.nm}</span></p>)}
      </div>
      <div className='animate-loop-scroll inline-block'>
        {expertiseArr.map((expertise) => <p className='items-center inline-block w-96' key={expertise.id}>{<expertise.icon className='inline-block'/>} <span className='ml-2 inline-block'>{expertise.nm}</span></p>)}
      </div>
    </div>
  )
}

export default Experience