import Link from 'next/link';
import React from 'react'
import { BsGithub, BsInstagram, BsMailbox, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { LiaLinkedin } from 'react-icons/lia';

const HANDLES = [
  {
    id: 1,
    icon: BsInstagram,
    size: 24,
    href: "https://www.instagram.com/trishhhh13/"
  },
  {
    id: 2,
    icon: LiaLinkedin,
    size: 34,
    href: "https://www.linkedin.com/in/trishala-kohade/"
  },
  {
    id: 3,
    icon: BsGithub,
    size: 24,
    href: "https://github.com/trishhhh13"
  },
  {
    id: 4,
    icon: BsWhatsapp,
    size: 24,
    href: "https://api.whatsapp.com/send?phone=7389178436"
  },
  {
    id: 5,
    icon: CgMail,
    size: 34,
    href: "mailto:trishalakohade4@gmail.com"
  }
]

const Social = () => {
  return (
    <div className='flex justify-around w-[30%] self-center bg-grullo rounded-full py-2 items-center mt-36'>
      {HANDLES.map(handle => <Link key={handle.id} href={handle.href} target='blank'>
        <handle.icon color='black' size={handle.size}/>
      </Link>)}
    </div>
  )
}

export default Social