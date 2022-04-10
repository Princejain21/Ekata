import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white sticky-top">
  <Link className="navbar-brand text-primary" to="#f">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav text-white">
      <Link className="nav-item nav-link " to="/">Home</Link>
      <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
      <Link className="nav-item nav-link" to="/create">Create</Link>
    </div>
  </div>
</nav>


  )
}
 