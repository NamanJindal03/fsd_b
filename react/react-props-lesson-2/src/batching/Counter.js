import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount(){
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);
        // setCount(count + 5 );
        setCount((prev)=>prev+1)
        setCount((prev) => prev+2)
        
        setCount(500); //absolute state set 
    }

  return (
    <div style={{display: 'flex', marginTop: '10px', justifyContent:'center'}}>
        <div>{count}</div>
        <button onClick={increaseCount}>Increase count twice</button>
    </div>
  )
}


// function useState(initialValue){
//     let state = initialValue;
//     let tempStore = initialValue;
//     function updateState(updatedValue){
//         if(typeof updatedValue === 'function'){
//             tempStore = updatedValue(tempStore)
//         }
//         state = updatedValue;
//     }
//     return [state, updateState]
// }