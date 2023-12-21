import React, { useEffect, useState, useCallback } from 'react'
import Child2 from './Child2'
export default function App2() {
    const [count, setCount] = useState(10)
    const fetchData =  useCallback(
        async (id) => {
            return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
            .then(json => console.log(json))
        }, []
    )
    useEffect(()=>{
        fetchData(1)
    }, [])
  return (
    <>
        <Child2 fetchData={fetchData}/>
        <button onClick={()=> setCount(count+1)}>Chnage State</button>
    </>
  )
}
