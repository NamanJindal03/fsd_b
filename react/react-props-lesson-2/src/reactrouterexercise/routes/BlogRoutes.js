import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import Blog1 from '../pages/Blog1'
import BlogLayout from '../pages/BlogLayout'

export default function BlogRoutes() {
  return (
    <Routes>
        <Route  element={<BlogLayout />}>          
            <Route index element={<Blog />} />
            {/* <Route path='blog1' element={<Blog1 />}/>
            <Route path='blog2' element={<Blog2 />}/> */}
            <Route path=':blogId' element={<Blog1 />} />
            <Route path='*' element={<div>No valid blog found</div>}/>
        </Route>
    </Routes>
  )
}
