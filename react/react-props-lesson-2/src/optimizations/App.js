import React, { useState, useMemo } from 'react'
import Child from './Child'

export default function App() {
    const array1 = useMemo(()=>{
        return [1,2,3]
    }, [])
    console.log('the parent is rerendered')
    const [state, setState] = useState(10)
    const [state2, setState2] = useState([1,2,3])
  return (
    <>
        <div>App</div>
        <div>{state}</div>
        <Child state2={state2}/>
        <button onClick={()=> setState(state+1)}>Update Parent State</button>
        <button onClick={()=> {
            setState2(array1)
            setState(state+1)
        }}>Update Parent State2</button>
    </>
  )
}
