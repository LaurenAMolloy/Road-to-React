import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
    //add links to pages
    //add logo and link to homepage
  return (
    <nav className="w-full flex justify-between py-2 px-2 bg-black text-white">
      <Link to="/">REACT</Link>
      <div>
      <ul className='flex justify-evenly gap-2'>
      <li>
        <Link to="/core">Core</Link>
      </li>
      <li>
        <Link to="/ui">UI</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/testing">Testing</Link>
      </li>
      </ul>
      </div>
    </nav>
  )
}
