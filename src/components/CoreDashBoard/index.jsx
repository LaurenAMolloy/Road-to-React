import React from 'react'
import { Link } from 'react-router'

export default function CoreDashBoard() {

    const corelinks = [
        {label: "State", to:"useState"},
        {label: "Props", to:"props"},
        {label: "Effects", to:"useeffect"},
        {label: "Context", to:"usecontext"},
    ]

    const renderedLinks = corelinks.map((link) => {
        return  <li key={link.label} className='bg-gray-400 px-3 py-1 rounded-full  hover:bg-gray-500'>
        <Link to={link.to}>{link.label}</Link>
    </li>
    });

  return (
    <div className='w-full'>
        <ul className='flex flex-wrap justify-evenly font-bold gap-3 p-4'>
            {renderedLinks}
        </ul>
    </div>
  )
}
