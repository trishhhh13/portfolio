import React from 'react';
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['cyrillic'] });

const Text = (props:{children:string, className?:string}) => {
    const nmArr = props.children.split(" ");
  return (
    <div className={`text-5xl flex-row ${caveat.className}`}>
        {nmArr.map((element: string, index) => {
            return <p key={index} className={`first-letter:text-grullo mr-2 inline-block  ${props.className}`}>{element}</p>
        })}
    </div>
  )
}

export default Text;