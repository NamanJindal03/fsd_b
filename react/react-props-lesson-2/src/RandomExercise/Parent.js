import React, {useState} from 'react'
import Child from './Child'

function Parent() {
    const [arr, setArr] = useState(['a', 'b', 'z', 'x', 'f']);
  return (
    <>
        <div>Parent</div>
        <Child alphabets={arr}/>
    </>
  )
}

// const basic = () => 
//     10

export default Parent