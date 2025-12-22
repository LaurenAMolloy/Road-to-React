import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
    //add links to pages
    //add logo and link to homepage
  return (
    <nav className="w-full flex justify-between py-2 px-2 bg-black text-white">
      <Link to="/">REACT</Link>
      <ul>
        <li>
        <Link to="/usestate">useState</Link>
        </li>
        <li>
        <Link to="/useeffect">useEffect</Link>
        </li>
        <li>
        <Link to="/props">Props</Link>
        </li>
      </ul>
    </nav>
  )
}
