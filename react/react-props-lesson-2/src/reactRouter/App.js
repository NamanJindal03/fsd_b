import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Base from './pages/Base'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Base />}/>
            <Route path='/home' >
                <Route index  element={<Home />}/>
                <Route path='a' element={<div>a</div>}/>
                <Route path='b' element={<div>b</div>}/>
                <Route path='*' element={<div>Not found</div>} />
            </Route>
            <Route path='/about' element={<About />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
        {/* <Routes>
            <Route path='*' element={<NotFound />}/>

        </Routes> */}
    </BrowserRouter>
  )
}
