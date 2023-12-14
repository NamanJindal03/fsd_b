import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate("/home", {state:{isRedirected: true}})
        }, 3000);
    },[])
  return (
    <div>NotFound</div>
  )
}
