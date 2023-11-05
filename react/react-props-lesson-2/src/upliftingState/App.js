import React, {useState} from 'react'
import Child from './Child'
import Child2 from './Child2';

export default function App() {
    const [childCount, setChildCount] = useState(10);

    function changeCount(){
        setChildCount((prev)=>{
            return prev+1;
        })
    }
  return (

   <>
    <Child count={childCount}/>
    <button onClick={changeCount}>Change Child Count</button>
    <div>Child Count - </div>
    <Child2 count={childCount}/>
   </>
  )
}
