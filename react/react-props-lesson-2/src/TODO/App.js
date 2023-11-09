import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay';

export default function App() {
    const [todoList, setTodoList] = useState([]); //array of objects
    function addTodo(todo){
        setTodoList((prevTodoList)=>{
            return [...prevTodoList, todo];
        })
    }
    function handleTodoDelete(id){
        console.log('attempted to delete ', id);
        // const duplicate = [...todoList];

        setTodoList((prev)=>{
            // const newArr = prev.filter((_, i)=>{
            //     return i !== index
            // })
            const newArr = prev.filter((todo)=>{
                return todo.id !== id
            })
            return newArr
        })
    }
    function handleTodoCompleteToggle(id){
        setTodoList((prev)=>{
            const updatedArr = prev.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo
            })
            return updatedArr;
        })
    }
  return (
    <>
        <TodoForm addTodo={addTodo}/>
        <TodoDisplay 
            todoList={todoList} 
            handleTodoDelete={handleTodoDelete}
            handleTodoCompleteToggle= {handleTodoCompleteToggle}
        />
    </>
  )
}
