import React from 'react'
import logo from "../assets/logo.png"
import "../styles/navbar.scss"
import {HiBars3BottomRight} from "react-icons/hi2"
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='navbar-links'>
            <ul>
                <li>Home</li>
                <li>Featured</li>
                <li>Services</li>
                <li>Explore</li>
            </ul>
            {/* <HiBars3BottomRight  /> */}

        </div>
        <div className='btn'>
            <button className='button'>Login/Register</button>
        </div>
    </nav>
  )
}
