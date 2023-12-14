import { useEffect } from 'react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function B() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    useEffect(()=>{
        if(location.state?.abc) navigate('/def');
        if(location.state?.xyz) navigate('/z');
        if(location.state?.png) navigate('/g');
    },[])
  return (
    <div>B</div>
  )
}
