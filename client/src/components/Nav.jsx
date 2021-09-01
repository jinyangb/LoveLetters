import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Love Letters</h4>
      <div>
        <NavLink to="/">Letters</NavLink>
        <NavLink to="/comments">Comments</NavLink>
      </div>
    </nav>
  )
}

export default Nav