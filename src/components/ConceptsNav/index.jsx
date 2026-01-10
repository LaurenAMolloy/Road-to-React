import React from 'react'
import { Link } from 'react'

export default function ConceptsNav() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/usestate">State</Link>
            </li>
            <li>
                <Link to="/use">Props</Link>
            </li>
            <li>
                <Link to="/use">Effects</Link>
            </li>
            <li>
                <Link to="/use">Context</Link>
            </li>
        </ul>
    </div>
  )
}
