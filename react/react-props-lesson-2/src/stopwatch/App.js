import React, {useEffect, useState} from 'react'
import Child from './Child'
export default function App() {
    const [isChild, setIsChild] = useState(true)
  return (
    <>
        {isChild && <Child />}
        <button onClick={()=> setIsChild((prev)=> !prev)}>Child</button>
    </>
  )
}
