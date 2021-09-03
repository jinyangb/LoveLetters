import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav className="navbar">
      <h4>Love Letters</h4>
      <div className="nav">
        <br/>
        <div className="divOne"><NavLink to="/">Letters</NavLink></div>
        <br/>
        <div className="divTwo"><NavLink to="/comments">Comments</NavLink></div>
        <br/>
      </div>
    </nav>
  )
}

export default Nav