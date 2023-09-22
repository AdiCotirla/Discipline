import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import "../Style/Navbar.css"
  import logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
        <Link to ="/" className='navbar-link'><img src={logo} alt='logo' className='logo'/></Link>
        <Link to="/" className='navbar-link click' >Home</Link>
        <Link to="/"className='navbar-link click'>T-shirts</Link>
        <Link to="/"className='navbar-link click'>About us</Link>
        <Link to="/"className='navbar-link click'>Contact us</Link>
        </div>
    </div>
  )
}
