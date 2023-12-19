import React, { Children, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link, Navigate, useNavigate } from 'react-router-dom'
import {userRoleMapping, ROLES} from './Utils/constants'
import {AuthProvider, AuthContext} from './context/AuthContext'


const LOGGED_IN_USER = userRoleMapping.dinesh //in reality having the compelte info of the user, currently having just the role directlt

export default function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<PageLayout />}>
                    <Route path='finance' element={<FinanceAuth> <Finance /> </FinanceAuth>}/>
                    <Route path='logistics' element={<LogisticsAuth> <Logistics /> </LogisticsAuth>} />
                    <Route path='product' element={<ProductAuth><Product /></ProductAuth>} />
                    <Route path='admin' element={<AdminAuth> <Admin /> </AdminAuth>} />
                    <Route path='shipments' element={<LogisticsAuth><Shipments /></LogisticsAuth>} />
                    <Route path='*' element={<NotFound />} />
                </Route>
                <Route path="/signin" element={<div> On signin </div>} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}
function PageLayout(){
    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLoggedIn){
            setTimeout(()=>{
                navigate('/signin')
            }, 3000)
        }
    })
    // if(!isLoggedIn) return (<Navigate to={'/signin'}> </Navigate>)
    if(!isLoggedIn) return (<div>Not Logged in</div>)
    return (
        <>
            <nav>
                <ul>
                    <li><Link to={'/finance'}>Finance</Link></li>
                    {isLogistics() && <li><Link to={'/logistics'}>Logistics</Link></li>}
                    <li><Link to={'/product'}>Product</Link></li>
                    <li><Link to={'/admin'}>Admin</Link></li>
                    <li><Link to={'/shipments'}>Shipments</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

function isLogistics(){
    if(
        ROLES.ADMIN === LOGGED_IN_USER || 
        ROLES.LOGISTICS === LOGGED_IN_USER ||
        ROLES.SUBADMIN === LOGGED_IN_USER
    ){
        return true
    }
    return false
}

function LogisticsAuth({children}){
    //Only admins and the finance team can access this
    if( isLogistics()){
        return (<>{children}</>)
    }
    else return <NotAuthorised />
}
function ProductAuth({children}){
    //Only admins and the finance team can access this
    if( 
        ROLES.ADMIN === LOGGED_IN_USER || 
        ROLES.PRODUCT === LOGGED_IN_USER ||
        ROLES.SUBADMIN === LOGGED_IN_USER
    ){
        return (<>{children}</>)
    }
    else return <NotAuthorised />
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
function Shipments(){
    return (
        <>I am the Shipments page</>
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