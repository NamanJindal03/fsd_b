import React from 'react'

export default function Todo({todo, handleTodoDelete, handleTodoCompleteToggle}) {
  const {isCompleted, data, id} = todo;
  return (
    <div style={{display:'flex', columnGap: '10px'}}>
        <div style={isCompleted ? {textDecoration: 'line-through'} : {}}>{data}</div>
        <button onClick={()=>{handleTodoCompleteToggle(id)}}>Complete Icon</button>
        <button onClick={()=> handleTodoDelete(id)}>Delete Icon</button>
    </div>
  )
}
