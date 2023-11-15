import React, {useState, useEffect} from 'react'
import Child from './Child'

export default function App() {
    const [isChild, setIsChild] = useState(false);
    useEffect(()=>{
        console.log('App updated')
    }, [isChild])
  return (
    <>
        {/* Conditionally rendered child -> will observe mounting and unmounting  */}
        {isChild && <Child />}
        <button onClick={()=>{setIsChild((prev) => !prev)}}>Trigger Lifecycles</button>
    </>
  )
}

