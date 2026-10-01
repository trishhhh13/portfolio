'use client';
import React, { useState } from 'react';
import Text from './reusables/text';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiPlay, FiSmartphone, FiGlobe, FiCheck } from 'react-icons/fi';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Mobile' | 'Web Tool';
  featured?: boolean;
  desc: string;
  bullets?: string[];
  tech: string[];
  img: string;
  demoUrl?: string;
  githubUrl?: string;
  stats?: string;
}

const PROJECTS: Project[] = [
  {
    id: "online-cabo",
    title: "Online Cabo – Multiplayer Card Game",
    subtitle: "Real-time Multiplayer Web Application & PWA",
    category: "Full-Stack",
    featured: true,
    desc: "Built and deployed a real-time multiplayer card game with room-based gameplay, turn management, scoring, and rematch support. Designed a responsive mobile-first PWA experience deployed with a custom domain.",
    bullets: [
      "Built and deployed a real-time multiplayer card game with room-based gameplay, turn management, scoring, and rematch support.",
      "Developed the frontend and integrated a Python backend with MongoDB and Socket.IO for persistent game state and real-time communication.",
      "Designed a responsive mobile-first PWA experience and deployed the application with a custom domain."
    ],
    tech: ["React", "Python", "MongoDB", "Socket.IO", "PWA", "Custom Domain"],
    img: "/online-cabo.jpg",
    demoUrl: "https://online-cabo.com/play/online",
    stats: "Live PWA • Real-time Socket.IO"
  },
  {
    id: "ajjas-app",
    title: "Ajjas – Smart IoT & Vehicle Safety",
    subtitle: "Cross-Platform Mobile Application",
    category: "Mobile",
    featured: true,
    desc: "End-to-end mobile application serving 50K+ active users with real-time GPS tracking, geofencing, accident detection alerts, and automotive telemetry dashboards.",
    bullets: [
      "Core modules including navigation, geofencing, dashboards, and real-time monitoring across 3+ products.",
      "Optimized React Native bridges and native Java/Kotlin modules for 98%+ crash-free sessions.",
      "Architected BFF services handling 1M+ monthly requests."
    ],
    tech: ["React Native", "Android SDK", "Java/Kotlin", "BFF APIs", "Razorpay"],
    img: "/ajjasApp.jpg",
    demoUrl: "https://play.google.com/store/apps/details?id=com.ajjas",
    stats: "50K+ Users • 1M+ req/mo"
  },
  {
    id: "portfolio-website",
    title: "Modern Developer Portfolio",
    subtitle: "Interactive Next.js Web Experience",
    category: "Full-Stack",
    desc: "Developed a responsive portfolio with reusable interactive components, custom typography, rich animations, and optimized page performance.",
    tech: ["Next.js 14", "React 18", "Tailwind CSS", "TypeScript"],
    img: "/ajjaswebsite.webp",
    githubUrl: "https://github.com/trishhhh13/portfolio",
    stats: "100 Lighthouse Performance"
  },
  {
    id: "schedify",
    title: "Schedify – Task & Schedule Manager",
    subtitle: "Productivity Web Application",
    category: "Full-Stack",
    desc: "Personal productivity application built to streamline task scheduling and agenda tracking with an intuitive, minimalist user interface.",
    tech: ["React", "JavaScript", "CSS Modules", "LocalStorage"],
    img: "/schedify.png",
    githubUrl: "https://github.com/trishhhh13/Schedify",
    stats: "Open Source"
  },
  {
    id: "json-linter",
    title: "JSON Linter & Validator",
    subtitle: "Developer Utility Tool",
    category: "Web Tool",
    desc: "Fast, responsive browser-based tool for validating, formatting, and debugging complex JSON payloads with instant error detection.",
    tech: ["React", "TypeScript", "Vercel"],
    img: "/jsonlinter.png",
    demoUrl: "https://jsonlint-inky.vercel.app/",
    githubUrl: "https://github.com/trishhhh13",
    stats: "Fast Client-Side Parsing"
  },
  {
    id: "ascian-app",
    title: "Ascian Book Lending Application",
    subtitle: "Native Android Mobile App",
    category: "Mobile",
    desc: "Android book lending application built and optimized for high performance, improving data retrieval speeds by 40% and achieving a 98% crash-free release.",
    tech: ["Android SDK", "Java", "MVVM", "Performance Tuning"],
    img: "/ascian.png",
    demoUrl: "https://www.ascian.in/",
    stats: "25% Performance Boost"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Mobile' | 'Web Tool'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const featuredCabo = PROJECTS.find(p => p.id === "online-cabo")!;

  return (
    <div className='py-28 md:py-36 px-6 md:px-[8%] w-full max-w-7xl mx-auto'>
      {/* Section Header */}
      <div className='text-center mb-16'>
        <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
          Featured Engineering
        </span>
        <div className='mt-2'>
          <Text>Featured Projects</Text>
        </div>
        <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
          Real-world multiplayer games, scalable mobile platforms with 50K+ users, and developer tooling.
        </p>
      </div>

      {/* Hero Highlight Project: Online Cabo */}
      <div className='mb-20 bg-gradient-to-br from-raisin via-[#24201c] to-black border border-grullo/40 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden group'>
        <div className='absolute top-0 right-0 w-80 h-80 bg-grullo/10 rounded-full blur-3xl pointer-events-none' />

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left'>
          {/* Image & Preview */}
          <div className='lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-grullo/50 transition-all duration-500'>
            <Image
              src={featuredCabo.img}
              alt={featuredCabo.title}
              width={800}
              height={480}
              className='w-full object-cover group-hover:scale-105 transition-transform duration-500 aspect-[16/9]'
            />
            <div className='absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-grullo/40 text-xs text-grullo font-semibold flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-ping' />
              <span>{featuredCabo.stats}</span>
            </div>
          </div>

          {/* Details */}
          <div className='lg:col-span-5 flex flex-col justify-between h-full'>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <span className='px-3 py-1 text-xs font-semibold rounded-full bg-grullo/20 text-grullo border border-grullo/30'>
                  Featured Project
                </span>
                <span className='text-xs text-neutral-400'>
                  Full-Stack PWA
                </span>
              </div>

              <h3 className='text-2xl md:text-3xl font-extrabold text-white mb-2'>
                {featuredCabo.title}
              </h3>
              <p className='text-sm text-grullo font-medium mb-4'>
                {featuredCabo.subtitle}
              </p>

              <p className='text-neutral-300 text-sm md:text-base leading-relaxed mb-4'>
                {featuredCabo.desc}
              </p>

              <ul className='space-y-2 mb-6 text-xs md:text-sm text-neutral-300'>
                {featuredCabo.bullets?.map((bullet, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <FiCheck className='text-grullo mt-0.5 shrink-0' size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className='flex flex-wrap gap-1.5 mb-6'>
                {featuredCabo.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className='text-xs px-2.5 py-1 rounded-md bg-black/60 text-neutral-200 border border-neutral-700 font-mono'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center gap-4 pt-4 border-t border-white/10'>
              {featuredCabo.demoUrl && (
                <a
                  href={featuredCabo.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 bg-gradient-to-r from-umber to-[#74624d] hover:brightness-110 text-white font-semibold text-sm px-6 py-2.5 rounded-full border border-grullo/40 shadow-md transition-all'
                >
                  <FiPlay size={16} />
                  <span>Play Live Game</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='flex justify-center gap-2 md:gap-4 mb-12 flex-wrap'>
        {(['All', 'Full-Stack', 'Mobile', 'Web Tool'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              filter === tab
                ? 'bg-grullo text-black border-grullo shadow-md shadow-grullo/20'
                : 'bg-raisin/70 text-neutral-300 border-white/5 hover:border-neutral-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Other Projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className='bg-raisin/80 hover:bg-neutral-800/90 border border-white/5 hover:border-grullo/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xl group'
          >
            <div>
              {/* Card Image */}
              <div className='relative w-full aspect-[16/10] overflow-hidden bg-neutral-900'>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={250}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                {project.stats && (
                  <div className='absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-grullo border border-grullo/30 font-medium'>
                    {project.stats}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className='p-6'>
                <span className='text-xs text-grullo font-semibold uppercase tracking-wider'>
                  {project.category}
                </span>
                <h4 className='text-xl font-bold text-white mt-1 group-hover:text-grullo transition-colors'>
                  {project.title}
                </h4>
                <p className='text-xs text-neutral-400 mt-0.5 mb-3'>
                  {project.subtitle}
                </p>
                <p className='text-sm text-neutral-300 line-clamp-3 leading-relaxed'>
                  {project.desc}
                </p>
              </div>
            </div>

            {/* Footer with Tech & Links */}
            <div className='p-6 pt-0'>
              <div className='flex flex-wrap gap-1.5 mb-4'>
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className='text-[11px] px-2 py-0.5 rounded bg-black/50 text-neutral-300 border border-neutral-800'
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className='flex items-center gap-3 pt-4 border-t border-white/5'>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-xs text-grullo hover:text-white font-medium transition-colors'
                  >
                    <FiExternalLink size={14} />
                    <span>Live Demo / App</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-medium transition-colors ml-auto'
                  >
                    <FiGithub size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;