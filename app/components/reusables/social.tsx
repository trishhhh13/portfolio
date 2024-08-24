import Link from 'next/link';
import React from 'react'
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { LiaLinkedin } from 'react-icons/lia';
import { SiLeetcode } from 'react-icons/si';

const HANDLES = [
  {
    id: 1,
    icon: SiLeetcode,
    size: 24,
    nm: "Leetcode",
    href: "https://leetcode.com/u/trishhhh_13/"
  },
  {
    id: 2,
    icon: LiaLinkedin,
    size: 34,
    nm: "Linkedin",
    href: "https://www.linkedin.com/in/trishala-kohade/"
  },
  {
    id: 3,
    icon: BsGithub,
    size: 24,
    nm: "Github",
    href: "https://github.com/trishhhh13?tab=repositories"
  },
  {
    id: 4,
    icon: BsWhatsapp,
    size: 24,
    nm: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=7389178436"
  },
  {
    id: 5,
    icon: CgMail,
    size: 34,
    nm: "Mail",
    href: "mailto:trishalakohade4@gmail.com"
  }
]

const Social = () => {
  return (
    <div className='flex justify-around social self-center bg-grullo rounded-full py-2 items-center mt-36'>
      {HANDLES.map(handle => <Link key={handle.id} href={handle.href} target='blank' className='tooltip'>
        <handle.icon color='black' size={handle.size}/>
        <p className="tooltiptext">{handle.nm}</p>
      </Link>)}
    </div>
  )
}

export default Social