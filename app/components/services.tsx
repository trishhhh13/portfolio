import React from 'react';
import Text from './reusables/text';
import { BsAndroid, BsSpeedometer2 } from 'react-icons/bs';
import { SiFrontendmentor, SiSocketdotio } from 'react-icons/si';
import { FiLayers, FiServer, FiSmartphone, FiActivity } from 'react-icons/fi';

const SERVICES = [
  {
    id: 1,
    icon: FiSmartphone,
    nm: "Mobile App Engineering",
    desc: "Architecting high-performance, cross-platform mobile apps using React Native and Expo, with native Java/Kotlin modules, smooth Expo SDK migrations, and Play Store releases.",
    badge: "React Native • Expo • Android"
  },
  {
    id: 2,
    icon: FiLayers,
    nm: "Modern Frontend Systems",
    desc: "Building intuitive, responsive web applications with React, Next.js, and TypeScript. Designing scalable component systems with focus on performance, accessibility, and clean architecture.",
    badge: "Next.js • React • TypeScript"
  },
  {
    id: 3,
    icon: FiServer,
    nm: "BFF & Real-time Backends",
    desc: "Developing BFF (Backend-for-Frontend) services and REST APIs capable of handling 1M+ requests/month, paired with MongoDB, Drizzle ORM schemas, and Socket.IO real-time gameplay channels.",
    badge: "REST APIs • Drizzle ORM • Socket.IO"
  },
  {
    id: 4,
    icon: FiActivity,
    nm: "Observability & Performance",
    desc: "Optimizing application stability with deep observability setups—integrating Firebase Crashlytics, Amplitude product analytics, and latency reductions exceeding 30%.",
    badge: "Crashlytics • Amplitude • Latency Tuning"
  }
];

const Services = () => {
  return (
    <div className='bg-[#141312] w-full py-28 md:py-36 border-y border-white/5'>
      <div className='max-w-7xl mx-auto px-6 md:px-[8%]'>
        <div className='text-center mb-16'>
          <span className='text-grullo text-sm font-semibold uppercase tracking-widest'>
            What I Bring To The Table
          </span>
          <div className='mt-2'>
            <Text>Engineering Capabilities</Text>
          </div>
          <p className='text-neutral-400 max-w-2xl mx-auto mt-4 text-sm md:text-base'>
            From concept to production release—delivering resilient code, high-throughput backend services, and delightful cross-device user experiences.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left'>
          {SERVICES.map((srvc) => (
            <div
              key={srvc.id}
              className='bg-raisin/90 hover:bg-neutral-800/90 border border-white/5 hover:border-grullo/40 p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-xl group'
            >
              <div>
                <div className='w-14 h-14 rounded-2xl bg-grullo/10 border border-grullo/20 flex items-center justify-center text-grullo mb-6 group-hover:scale-110 transition-transform'>
                  <srvc.icon size={28} />
                </div>
                
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-grullo transition-colors'>
                  {srvc.nm}
                </h3>
                <p className='text-neutral-400 text-sm leading-relaxed mb-6'>
                  {srvc.desc}
                </p>
              </div>

              <div className='pt-4 border-t border-white/5'>
                <span className='text-xs font-mono text-grullo/90'>
                  {srvc.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;