'use client';
import React from 'react';
import Text from './reusables/text';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { BsBuildings, BsArrowUpRight } from 'react-icons/bs';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  skills: string[];
  badgeColor?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: "Nudgity Labs",
    role: "Software Development Engineer II",
    period: "May 2026 – Present",
    location: "Delhi",
    type: "Full-Time",
    current: true,
    summary: "Leading frontend and cross-platform mobile application development, architecting key features and database integrations.",
    bullets: [
      "Own frontend and mobile application development using React and React Native, driving features from implementation through production.",
      "Built and delivered an end-to-end notification system covering frontend integration, notification handling, user flows, and production release.",
      "Upgraded the mobile application from Expo SDK 50 to Expo SDK 57, resolving compatibility issues and ensuring application stability across the migration.",
      "Integrated Firebase Crashlytics, Firebase Analytics, and Amplitude for crash monitoring, product analytics, and user behavior tracking.",
      "Designed database architecture and schemas from scratch using Drizzle ORM and integrated application data flows with backend services."
    ],
    skills: ["React", "React Native", "Expo SDK 57", "Drizzle ORM", "Firebase Crashlytics", "Amplitude", "TypeScript", "Database Design"],
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    id: 2,
    company: "Predictive Data Sciences",
    role: "Mobile App Consultant",
    period: "Feb 2026 – Apr 2026",
    location: "Remote",
    type: "Consultant",
    summary: "Provided specialized React Native consulting, feature implementations, and application stability improvements.",
    bullets: [
      "Contributed to React Native mobile application development, feature implementation, debugging, and application improvements.",
      "Collaborated with engineering and product teams to deliver mobile features and improve application stability and user experience."
    ],
    skills: ["React Native", "Performance Tuning", "Component Architecture", "Mobile UX", "Cross-Team Collaboration"],
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: 3,
    company: "HPS Lab Designs (AJJAS)",
    role: "Senior Software Engineer (SDE II)",
    period: "Dec 2021 – Feb 2026",
    location: "Bhopal, Madhya Pradesh",
    type: "Full-Time",
    summary: "Spearheaded core mobile and web platforms serving 50K+ active users across 3+ IoT connected automotive products.",
    bullets: [
      "Led end-to-end development of cross-platform mobile and frontend features serving 50K+ active users using React, React Native, and native Android.",
      "Built core modules including navigation, geofencing, dashboards, and real-time monitoring across 3+ products.",
      "Designed scalable application architecture and reusable components; developed native Java/Kotlin modules and optimized React Native bridges.",
      "Architected BFF services and REST APIs handling 1M+ requests/month and improved performance, reducing crashes and latency by 30%+.",
      "Led production releases, integrated Razorpay payments, resolved critical issues with under 2-hour turnaround, and mentored junior developers."
    ],
    skills: ["React Native", "Native Android (Java/Kotlin)", "React", "BFF Architecture", "REST APIs", "Razorpay", "Geofencing", "Mentorship"],
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
  },
  {
    id: 4,
    company: "Ascian Solutions",
    role: "Android Development Intern",
    period: "Sept 2021 – Dec 2021",
    location: "New Delhi",
    type: "Internship",
    summary: "Engineered and optimized Android applications with focus on responsiveness and crash reduction.",
    bullets: [
      "Built and optimized an Android book lending application, improving performance by 25% and achieving a 98% crash-free release.",
      "Implemented responsive layouts and modernized internal data communication flows."
    ],
    skills: ["Android SDK", "Java", "Mobile Optimization", "MVVM", "UI/UX"],
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  }
];

const WorkExperience = () => {
  return (
    <div className='py-28 md:py-36 px-6 md:px-[8%] w-full max-w-7xl mx-auto'>
      <div className='text-center mb-16'>
        <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
          Career Journey
        </span>
        <div className='mt-2'>
          <Text>Work Experience</Text>
        </div>
        <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
          Over 4 years of proven engineering leadership across high-scale mobile platforms, backend integration, and web applications.
        </p>
      </div>

      <div className='relative border-l-2 border-neutral-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12'>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className='relative group text-left'>
            {/* Timeline Dot */}
            <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 border-black ${
              exp.current ? 'bg-grullo ring-4 ring-grullo/20' : 'bg-neutral-600'
            } transition-all duration-300 group-hover:scale-125`} />

            {/* Experience Card */}
            <div className='bg-raisin/90 hover:bg-neutral-800/90 border border-white/5 hover:border-grullo/30 p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-xl backdrop-blur-sm'>
              {/* Header Info */}
              <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                <div>
                  <div className='flex items-center gap-3 flex-wrap'>
                    <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-grullo transition-colors'>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className='px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'>
                        Current Role
                      </span>
                    )}
                  </div>
                  
                  <div className='flex items-center gap-2 mt-1 text-grullo font-medium text-lg'>
                    <BsBuildings size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className='flex flex-col md:items-end gap-1 text-xs md:text-sm text-neutral-400'>
                  <div className='flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/5'>
                    <FiCalendar size={14} className='text-grullo' />
                    <span>{exp.period}</span>
                  </div>
                  <div className='flex items-center gap-1.5 mt-1 text-neutral-400'>
                    <FiMapPin size={14} className='text-grullo' />
                    <span>{exp.location} • {exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className='text-neutral-300 text-sm md:text-base font-normal mb-5 leading-relaxed'>
                {exp.summary}
              </p>

              {/* Bullet Points */}
              <ul className='space-y-2.5 mb-6 text-sm md:text-base text-neutral-300'>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className='flex items-start gap-2.5 leading-relaxed'>
                    <FiCheckCircle size={16} className='text-grullo mt-1 shrink-0' />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className='pt-4 border-t border-white/5 flex flex-wrap gap-2'>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className='text-xs px-3 py-1 rounded-lg bg-black/50 text-neutral-300 border border-neutral-700 hover:border-grullo/40 transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
