import React, {useState} from 'react'

// console.log(globalCount)
let childGlobalCount = 0;
export default function CounterChild({count}) {
    const [counter2, setCounter2] = useState(1000);
    console.log('child executed', counter2)
    function increaseInternalCounterCount(){
        setCounter2(counter2 +1 );
    }
  return (
    <>
        {/* <div>{childGlobalCount}</div> */}

        <div>this is my internal counter - I am not like my parent</div>
        <div>{childGlobalCount}</div>
        {/* <button onClick={increaseInternalCounterCount}>Increase internal count</button> */}
        <button onClick={()=>{
            childGlobalCount++;
            console.log(childGlobalCount);
        }}>Increase internal count</button>
    </>
  )
}
