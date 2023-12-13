import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function BlogLayout() {
    const DEFAULT_RESOURCE = '/blog'
  return (
    <>
    <Outlet />
        <nav>
            <ul>
                <li>
                    <Link to={`${DEFAULT_RESOURCE}/1`}>Blog 1</Link>
                </li>
                <li>
                    <Link to={`${DEFAULT_RESOURCE}/2`}>Blog 2</Link>
                </li>
                <li>
                    <Link to={`${DEFAULT_RESOURCE}/3`}>Blog 3</Link>
                </li>
            </ul>
        </nav>
        
    </>
  )
}
