import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <a className="navbar-brand" href="/home">React Bootcamp</a>

  <button className="navbar-toggler" type="button" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li className="nav-item"><Link className='nav-link' to='/home' >Home</Link></li>
      <li className="nav-item"><Link className='nav-link' to='/about' >About</Link></li>
      <li className="nav-item"><Link className='nav-link' to='/contact' >Contact</Link></li>
    </ul>
  </div>
</nav>
           
  )
}

export default Navbar
