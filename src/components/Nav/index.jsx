import React from 'react'
import { NavLink } from 'react-router'

export default function Nav() {
    //add links to pages
    //add logo and link to homepage
  return (
    <nav className="w-full flex justify-between py-2 px-2 bg-black text-white">
      <NavLink to="/"
      activeclassname="selected">REACT</NavLink>
      <div>
      <ul className='flex justify-evenly gap-2'>
      <li>
        <NavLink to="/core">Core</NavLink>
      </li>
      <li>
        <NavLink to="/ui">UI</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/testing">Testing</NavLink>
      </li>
      </ul>
      </div>
    </nav>
  )
}
