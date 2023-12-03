import React, {useEffect, useState} from 'react'
import TodoForm from './TodoForm'
import TodoDisplay from './TodoDisplay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    //whenevre the component will rerender you will be unnecarrily calling the api. 
    //specific api which needs to be called after every say 10 seconds. 
    //setTimeout -> update useEeffect -> 
    function execAPIcall(){
        //executiin the api
    }
    execAPIcall();

    const [todoList, setTodoList] = useState([]); //array of objects
    useEffect(()=>{
        console.log('lading unnecsaary ')
        //mounted -> add the todo list state 
        const LsTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
        setTodoList(LsTodoList);
    },[])
    function addTodo(todo){
        setTodoList((prevTodoList)=>{
            return [...prevTodoList, todo];
        })
        const LsTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
        console.log(LsTodoList);
        LsTodoList.push(todo);
        localStorage.setItem('todoList', JSON.stringify(LsTodoList));
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
            localStorage.setItem('todoList', JSON.stringify(newArr))
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
            localStorage.setItem('todoList', JSON.stringify(updatedArr))
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
