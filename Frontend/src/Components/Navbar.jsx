import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <section className='flexCenter navbarsize'>
<div className='navbarcontainer h-container navbarsize'>
      <div className='logo'>
        <img src="./ACS.png" alt="" />
      </div>

<div className='navbarelements'>
        <Link to='/'>
          <h3>Home</h3>
        </Link>

        <Link to='/service'>
          <h3>Service</h3>
        </Link>

        <Link to='/Contact'>
          <h3>Contact</h3>
        </Link>
      </div>
     

      <div className='loginbtn'>
        <Link to='/SeConnecter'>
          <img src="./login.png" alt="" />
        </Link>
      </div>
    </div>
    </section>
    
  )
}

export default Navbar