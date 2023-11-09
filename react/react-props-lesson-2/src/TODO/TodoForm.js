import React, {useState} from 'react'
import { toast } from 'react-toastify';

export default function TodoForm({addTodo}) {
    const [todoValue, setTodoValue] = useState(""); /* to handle input box -> making it a controlled component */

    function handleTodoInputChange(e){
        setTodoValue(e.target.value)
    }  
    function handleTodoFormSubmit(e){
        e.preventDefault();
        if(todoValue.trim() === ''){
            toast.error('Todo cannot be blank', {});
            return;
        }
        const todoObject ={
            data: todoValue,
            id: Date.now(),
            isCompleted: false,
        }
        addTodo(todoObject)
        setTodoValue("");
    }


  return (
    <form >
        <input type="text" name="todo" value={todoValue} onChange={handleTodoInputChange}/>
        <button onClick={handleTodoFormSubmit}>Add Todo</button>
    </form>
  )
}
