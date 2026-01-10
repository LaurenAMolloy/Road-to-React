import React from 'react'
import { Link } from 'react-router'

export default function CoreDashBoard() {
  return (
    <div>
        <ul>
            <li>
                <Link to="usestate">State</Link>
            </li>
            <li>
                <Link to="props">Props</Link>
            </li>
            <li>
                <Link to="useeffect">Effects</Link>
            </li>
            <li>
                <Link to="usecontext">Context</Link>
            </li>
        </ul>
    </div>
  )
}
