import React, { useState } from 'react'
import Child from './Child'

export default function App() {
    console.log('the parent is rerendered')
    const [state, setState] = useState(10)
    const [state2, setState2] = useState(10)
  return (
    <>
        <div>App</div>
        <div>{state}</div>
        <Child state2={state2}/>
        <button onClick={()=> setState(state+1)}>Update Parent State</button>
        <button onClick={()=> {
            setState2(state2)
            setState(state+1)
        }}>Update Parent State2</button>
    </>
  )
}
