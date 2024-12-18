import Image from 'next/image'
import React from 'react'

const skills = [
  {
    id: 1,
    nm: "/html.png",
    alt: "HTML"
  },
  {
    id: 2,
    nm: "/csss.png",
    alt: "CSS"
  },
  {
    id: 3,
    nm: "/js.png",
    alt: "Javascript"
  },
  {
    id: 4,
    nm: "/git.png",
    alt: "Git"
  },
  {
    id: 5,
    nm: "/figma.png",
    alt: "Figma"
  },
  {
    id: 6,
    nm: "/react.png",
    alt: "ReactJS/React Native"
  },
  {
    id: 7,
    nm: "/typescript.png",
    alt: "TypeScropt"
  },
  {
    id: 8,
    nm: "/next.jpeg",
    alt: "NextJS"
  },
  {
    id: 9,
    nm: "/android.jpg",
    alt: "Android"
  }
]

const Skills = () => {
  return (
    <div className='overflow-hidden py-5 whitespace-nowrap bg-black'>
      <div className='animate-loop-scroll inline-block'>
        {skills.map(skill => <Image width={100} height={150} key={skill.id} src={skill.nm} className='inline-block' alt={skill.alt} />)}
        {skills.map(skill => <Image width={100} height={150} key={skill.id} src={skill.nm} className='inline-block' alt={skill.alt} />)}
      </div>

    </div>
  )
}

export default Skills