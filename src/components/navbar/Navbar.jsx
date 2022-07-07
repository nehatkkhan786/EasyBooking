import "./navbar.css"
import React from 'react'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  return (
   <div className='navbar'>
       <div className='navContainer'>
            <span className='logo' onClick={()=>navigate('/')}>Easy Booking</span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Sign in</button>
            </div>
       </div>

   </div>
  )
}

export default Navbar