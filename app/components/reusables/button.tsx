'use client'
import React from 'react'

const Button = (props: {scrollId?: string, title:string, className?:string}) => {
  const handleScroll = (targetId?:string) => {
    if (!targetId) return;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <button onClick={() => handleScroll(props.scrollId)} className={`bg-umber text-lg px-12 py-1 my-4 rounded-md self-start ${props.className}`}>{props.title}</button>
  )
}

export default Button