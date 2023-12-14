import React from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom'
export default function Home() {
  const location = useLocation()
  console.log(location)
  return (
    <>
        <Nav />
        <div>Home</div>
    </>
  )
}
