import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Love Letters</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Nav