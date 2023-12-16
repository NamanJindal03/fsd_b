import React from 'react'
import MyContextProvider from './context/MyContextProvider'
import Child from './Child'
export default function App() {
  return (
    <MyContextProvider>
        <Child />
    </MyContextProvider>
  )
}
