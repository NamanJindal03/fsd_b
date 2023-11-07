import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay';

export default function App() {
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo){
        setTodoList((prevTodoList)=>{
            return [...prevTodoList, todo];
        })
    }
  return (
    <>
        <TodoForm addTodo={addTodo}/>
        <TodoDisplay todoList={todoList}/>
    </>
  )
}
