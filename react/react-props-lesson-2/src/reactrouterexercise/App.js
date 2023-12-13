import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Blog1 from './pages/Blog1'
import Blog2 from './pages/Blog2'
import Profile from './pages/Profile'
import BlogLayout from './pages/BlogLayout'


export default function App() {
  return (
    <Router>

        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/blog' element={<BlogLayout />}>
                <Route index element={<Blog />} />
                {/* <Route path='blog1' element={<Blog1 />}/>
                <Route path='blog2' element={<Blog2 />}/> */}
                <Route path=':blogId' element={<Blog1 />} />
                <Route path='*' element={<div>No valid blog found</div>}/>
            </Route>
            <Route path='about/*' element={<About />}/>
            <Route path="profile/:profileId/:continentId" element={<Profile />} />
        </Routes>
    </Router>
  )
}
