import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Love Letters</h4>
      <div className="nav">
        <div className="divOne"><NavLink to="/">Letters</NavLink></div>
        <div className="divTwo"><NavLink to="/comments">Comments</NavLink></div>
      </div>
    </nav>
  )
}

export default Nav