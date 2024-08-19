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
    <div className='mt-24 max-h-20 bg-eerie flex justify-around w-[100%] p-10 items-center'>
        {expertiseArr.map((expertise) => <p className='flex items-center' key={expertise.id}>{<expertise.icon/>} <span className='ml-2'>{expertise.nm}</span></p>)}
    </div>
  )
}

export default Experience