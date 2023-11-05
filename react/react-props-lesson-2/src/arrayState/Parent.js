import React, {useState} from 'react'
import Child from './Child'
import { v4 as uuidv4 } from 'uuid';

let data = 'abcd'
let abcd = [];
export default function Parent() {
    const [arr, setArr] = useState([
        {data:'a',_id:'100'}, 
        {data:'b',_id:'200'}, 
        {data:'c',_id:'300'}, 
        {data:'d',_id:'400'}
    ])
    const [newArr, setNewArr] = useState(abcd)
    function addData(){
        data+= '1';
        const obj = {
            data,
            _id : uuidv4()
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
