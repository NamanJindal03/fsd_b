import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/About">About</Link></li>
    </ul>
  )
}
