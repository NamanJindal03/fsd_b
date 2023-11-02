import React, {useState} from 'react'
import Child from './Child'

let data = 'abcd'
export default function Parent() {
    const [arr, setArr] = useState([
        {data:'a',_id:'100'}, 
        {data:'b',_id:'200'}, 
        {data:'c',_id:'300'}, 
        {data:'d',_id:'400'}
    ])
    function addData(){
        data+= '1';
        const obj = {
            data,
            _id : Date.now()
        }
        console.log(obj)
        setArr((prev)=>{
            return [...prev, obj]
        })
    }
  return (
    <>
        <Child arr= {arr}/>
        <button onClick={addData}> add data</button>
    </>
  )
}
