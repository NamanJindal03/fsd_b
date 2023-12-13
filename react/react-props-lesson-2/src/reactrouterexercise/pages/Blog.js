import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
        <Nav />
        <ul>
            <li><Link to="/blog/blog1">Blog1</Link></li>
            <li><Link to="/blog/blog2">Blog2</Link></li>
        </ul>
    </>
  )
}
