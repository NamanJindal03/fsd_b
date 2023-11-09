import React from 'react'
import Todo from './Todo'

export default function TodoDisplay({todoList, handleTodoDelete, handleTodoCompleteToggle}) {
  return (
    <>
        {todoList.map((todo)=>{
            return (<Todo 
                todo={todo} 
                key={todo.id} 
                handleTodoDelete={handleTodoDelete}
                handleTodoCompleteToggle={handleTodoCompleteToggle}
            />)
        })}
    </>
  )
}
