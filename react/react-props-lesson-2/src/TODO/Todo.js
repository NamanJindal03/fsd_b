import React from 'react'
import { FaCheckDouble, FaTrashAlt } from "react-icons/fa";
export default function Todo({todo, handleTodoDelete, handleTodoCompleteToggle}) {
  const {isCompleted, data, id} = todo;
  return (
    <div style={{display:'flex', columnGap: '10px', width: '30%', justifyContent: 'space-between'}}>
        <div style={isCompleted ? {textDecoration: 'line-through'} : {}}>{data}</div>
        <div className='actions'>
          <FaCheckDouble onClick={()=>{handleTodoCompleteToggle(id)}}/>
          <FaTrashAlt onClick={()=> handleTodoDelete(id)}/>
        </div>
    </div>
  )
}
