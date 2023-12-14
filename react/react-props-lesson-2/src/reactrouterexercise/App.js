import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Blog1 from './pages/Blog1'
import Blog2 from './pages/Blog2'
import Profile from './pages/Profile'
import BlogLayout from './pages/BlogLayout'
import BlogRoutes from './routes/BlogRoutes'
import Sample from './pages/Sample'
import B from './pages/B'
import NotFound from './pages/NotFound'
import SearchQuery from './pages/SearchQuery'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/root' element={<Navigate to={"/home"} />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/sample' element={<Sample />}/>
        <Route path='/blog/*' element={<BlogRoutes />} />
        <Route path='about/*' element={<About />}/> 



        <Route path="profile/:profileId/:continentId" element={<Profile />} />

        <Route path="/a" element={<Link to="/b" state={{abc: 10}}>Redirect A</Link>}/>
        <Route path="/c" element={<Link to="/b" state={{xyz: 20}}>Redirect C</Link>}/>
        <Route path="/d" element={<Link to="/b" state={{png: 20}}>Redirect D</Link>}/>

        <Route path="/b" element={<B />}/>
        <Route path="/query" element={<SearchQuery />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}
