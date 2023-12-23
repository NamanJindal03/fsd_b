import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function App() {
    const [value, setValue] = useLocalStorage(0, 'counter')
  return (
    <>
        {value}
        <button onClick={()=>setValue(value+1)}>increase counter</button>
    </>
  )
}
