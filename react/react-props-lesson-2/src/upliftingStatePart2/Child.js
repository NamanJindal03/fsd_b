import React, {useState} from 'react'

export default function Child({count, handlerClick, handleChildChild}) {
    const [cCount, setCount] = useState(0);
    function internalChildHandle(data){
        setCount((prev)=>{
            handleChildChild(prev + data);
            return prev + data;
        })
        
    }
  return (
    <>
    
        <div>Child {count}</div>
        <button onClick={() => handlerClick(20)}>Update Count</button>
        <button onClick={() => internalChildHandle(20)}>Update Child Child</button>


    </>
  )
}
