import React from 'react'
import Todo from './Todo'

export default function TodoDisplay({todoList}) {
  return (
    <>
        {todoList.map((todo, index)=>{
            return <Todo todo={todo}/>
        })}
    </>
  )
}
