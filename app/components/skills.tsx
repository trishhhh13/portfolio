import Image from 'next/image';
import React from 'react';
import Text from './reusables/text';
import { 
  FiCode, 
  FiSmartphone, 
  FiServer, 
  FiLayers, 
  FiTool, 
  FiCheck 
} from 'react-icons/fi';

const SKILL_CATEGORIES = [
  {
    id: 1,
    title: "Programming Languages",
    icon: FiCode,
    skills: ["JavaScript", "TypeScript", "Java", "Kotlin", "C++", "Python", "HTML5", "CSS3"]
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    icon: FiLayers,
    skills: ["React", "React Native", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Expo"]
  },
  {
    id: 3,
    title: "Mobile Architecture",
    icon: FiSmartphone,
    skills: ["Android SDK", "Expo", "Native Java/Kotlin Modules", "iOS Integration", "MVVM", "Play Store Deployment", "React Native Bridges"]
  },
  {
    id: 4,
    title: "Backend & Data",
    icon: FiServer,
    skills: ["REST APIs", "BFF (Backend for Frontend)", "MongoDB", "Drizzle ORM", "Socket.IO", "Database Design", "Relational & NoSQL"]
  },
  {
    id: 5,
    title: "Tools & Analytics",
    icon: FiTool,
    skills: ["Firebase Crashlytics", "Firebase Analytics", "Amplitude", "Git", "GitHub", "Figma", "Postman", "Chrome DevTools"]
  }
];

const MARQUEE_ICONS = [
  { id: 1, nm: "/react.png", alt: "React" },
  { id: 2, nm: "/typescript.png", alt: "TypeScript" },
  { id: 3, nm: "/next.jpeg", alt: "Next.js" },
  { id: 4, nm: "/android.jpg", alt: "Android" },
  { id: 5, nm: "/js.png", alt: "JavaScript" },
  { id: 6, nm: "/node.png", alt: "Node.js" },
  { id: 7, nm: "/git.png", alt: "Git" },
  { id: 8, nm: "/figma.png", alt: "Figma" },
  { id: 9, nm: "/html.png", alt: "HTML" },
  { id: 10, nm: "/csss.png", alt: "CSS" },
];

const Skills = () => {
  return (
    <div className='py-28 md:py-36 bg-[#121110] w-full border-b border-white/5'>
      <div className='max-w-7xl mx-auto px-6 md:px-[8%]'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
            Expertise & Stack
          </span>
          <div className='mt-2'>
            <Text>Technical Skills</Text>
          </div>
          <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
            Comprehensive toolkit covering cross-platform mobile apps, reactive frontend systems, backend microservices, and product telemetry.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-20'>
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className='bg-raisin/80 hover:bg-neutral-800/90 border border-white/5 hover:border-grullo/30 p-6 rounded-2xl transition-all duration-300 shadow-xl group'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2.5 rounded-xl bg-grullo/10 text-grullo border border-grullo/20 group-hover:scale-110 transition-transform'>
                  <category.icon size={22} />
                </div>
                <h3 className='text-lg font-bold text-white group-hover:text-grullo transition-colors'>
                  {category.title}
                </h3>
              </div>

              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className='inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-black/40 text-neutral-300 border border-neutral-800 hover:border-grullo/40 hover:text-white transition-colors'
                  >
                    <span className='w-1.5 h-1.5 rounded-full bg-grullo inline-block' />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Marquee Logo Strip */}
      <div className='overflow-hidden py-6 whitespace-nowrap bg-black/70 border-y border-white/5'>
        <div className='animate-loop-scroll inline-block'>
          {MARQUEE_ICONS.map((skill) => (
            <div key={skill.id} className='inline-block mx-6 group'>
              <div className='w-16 h-16 rounded-xl bg-raisin p-2 flex items-center justify-center border border-white/5 group-hover:border-grullo/40 transition-colors'>
                <Image 
                  width={40} 
                  height={40} 
                  src={skill.nm} 
                  className='object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300' 
                  alt={skill.alt} 
                />
              </div>
            </div>
          ))}
        </div>
        <div className='animate-loop-scroll inline-block'>
          {MARQUEE_ICONS.map((skill) => (
            <div key={`dup-${skill.id}`} className='inline-block mx-6 group'>
              <div className='w-16 h-16 rounded-xl bg-raisin p-2 flex items-center justify-center border border-white/5 group-hover:border-grullo/40 transition-colors'>
                <Image 
                  width={40} 
                  height={40} 
                  src={skill.nm} 
                  className='object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300' 
                  alt={skill.alt} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;