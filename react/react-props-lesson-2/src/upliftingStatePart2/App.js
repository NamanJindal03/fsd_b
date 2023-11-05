import React, {useState} from 'react'
import Child from './Child'
export default function App() {
    const [count, setCount] = useState(100);
    const [childChild, setChildChild] = useState(0);
    function handlerClick(numb){
        setCount((prev) => {
            return prev + numb;
        })
    }
    function handleChildChild(childData){
        setChildChild(childData)
    }
  return (
   <>
    <Child 
        count={count} 
        handlerClick={handlerClick} 
        handleChildChild= {handleChildChild}
    />
    <div>Child State Display - HACK - {childChild}</div>
   </>
  )
}
