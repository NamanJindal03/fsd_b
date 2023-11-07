import React from 'react'
import Todo from './Todo'

export default function TodoDisplay({todoList, handleTodoDelete}) {
  return (
    <>
        {todoList.map((todo, index)=>{
            return (<Todo 
                todo={todo.data} 
                key={todo.id} 
                id={todo.id}
                handleTodoDelete={handleTodoDelete}
            />)
        })}
    </>
  )
}
