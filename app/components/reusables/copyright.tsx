import { caveat } from '@/app/layout'
import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const Copyright = () => {
  return (
    <div className={`${caveat.className} text-grullo text-xl my-5 flex items-center`}>
      <BiCopyright/>
      <p>{new Date().getFullYear()} Trishala Kohade. All rights reserved.</p></div>
  )
}

export default Copyright