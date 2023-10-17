import React, { useState } from "react";

export default function State_1() {
  console.log(useState(100));
  const [count, setCount] = useState(0);
  // console.log(count);
  // setTimeout(()=>{
  //     // count = count + 1;
  //
  // })
  /* 
        function useState(initialValue){
            let someInternalVariable = initialValue;

            function internalFunctionToUpdateState(updatedValue){
                someInternalVariable = updatedValue;

                // repaint()
            }
            return [someInternalVariable, internalFunctionToUpdateState ]
        }
    */
  function increaseCount() {
    console.log("called");
    setCount(Math.random());
    // count = count + 1;
    // console.log(count);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase Count</button>
    </>
  );
}

