import React from 'react'
import MyContextProvider from './context/MyContextProvider'
import Child from './Child'
import Child2 from './Child2'
export default function App() {
  return (
    <>
      <MyContextProvider>
          <Child />
      </MyContextProvider>
      <Child2 />
    
    </>
    
  )
}
