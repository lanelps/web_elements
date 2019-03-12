import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test-1">test-1</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
