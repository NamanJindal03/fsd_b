import React, { Children } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {userRoleMapping, ROLES} from './Utils/constants'

const LOGGED_IN_USER = userRoleMapping.naman //in reality having the compelte info of the user, currently having just the role directlt

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/finance' element={<FinanceAuth> <Finance /> </FinanceAuth>} />
            <Route path='/logistics' element={<Logistics />} />
            <Route path='/product' element={<Product />} />
            <Route path='/admin' element={<AdminAuth> <Admin /> </AdminAuth>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
function FinanceAuth({children}){
    //Only admins and the finance team can access this
    if(ROLES.ADMIN === LOGGED_IN_USER || ROLES.FINANCE === LOGGED_IN_USER){
        return (<>{children}</>)
    }
    else return <NotAuthorised />
}
function AdminAuth({children}){
    //Only admins and the finance team can access this
    if(ROLES.ADMIN === LOGGED_IN_USER){
        return <>{children}</>
    }
    else return <NotAuthorised />
}

function Finance(){
    return (
        <>I am the finance page</>
    )
}
function Logistics(){
    return (
        <>I am the Logistics page</>
    )
}
function Product(){
    return (
        <>I am the Product page</>
    )
}
function Admin(){
    return (
        <>I am the Admin page</>
    )
}
function NotFound(){
    return (
        <>Please navigate to a different route ---- NotFound</>
    )
}

function NotAuthorised(){
    return (
        <div>You are not authorised to access this route</div>
    )
}