import React, {lazy, Suspense } from 'react'
import Child1 from './Child1';
import Fallback from './Fallback';
const Child2 = lazy(()=> import("./Child2.js"))
const Child3 = lazy(()=> import("./Child3.js"))

export default function App() {
  return (
    <>
        <Child1 />
        <Suspense fallback={<Fallback />}>
            <Child2 />
        </Suspense>
        <Suspense fallback={<div>laoding...............................</div>} >
            <Child3 />
        </Suspense>
    </>
  )
}
