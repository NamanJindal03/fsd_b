import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Nav() {
  return (
    <ul>
        {/* <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/About">About</Link></li> */}
       <li><NavLink to="/home">Home </NavLink></li>
        <li><NavLink to="/blog">Blog </NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
    </ul>
  )
}
