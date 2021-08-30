import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Video Game To Do List</h4>
      <div>
        <NavLink to="/"></NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Nav