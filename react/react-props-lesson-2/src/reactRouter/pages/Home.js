import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <ul>
        <li><Link to={"/"}>Base</Link> </li>
        <li><Link to={"/about"}>About</Link> </li>
        <li><Link to={"/ewfewfewefef"}>gibberish</Link> </li>
    </ul>
  )
}

/* 
    anchor tag in html -> 
        a -> html

        link
        navlink
*/