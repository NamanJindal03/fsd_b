import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast('Todo deleted Successfully', {});

    }
    function handleTodoCompleteToggle(id){
        let todoState ;
        setTodoList((prev)=>{
            const updatedArr = prev.map((todo)=>{
                if(todo.id === id){
                    todoState = !todo.isCompleted;
                    return {...todo, isCompleted: !todo.isCompleted}
                }
                return todo
            })
            toast(`Todo marked ${todoState ? 'completed': 'not completed'}`, {});
            return updatedArr;
        })
        

    }
    
  return (
    <>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TodoForm addTodo={addTodo}/>
            <TodoDisplay 
                todoList={todoList} 
                handleTodoDelete={handleTodoDelete}
                handleTodoCompleteToggle= {handleTodoCompleteToggle}
            
            />
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <ToastContainer />
    </>
  )
}
