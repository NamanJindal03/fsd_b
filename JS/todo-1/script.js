const inputBox = document.querySelector('#task');
const displayTasksTag = document.querySelector('#displayTasks');

const initialTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
for(let task of initialTodoList){
    addTaskInDom(task.name);
}

function addTodoInLocalStorage(newTask){
    const localStorageTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
    console.log(localStorageTodoList);
    const newTodoObj = {
        name: newTask
    }
    localStorageTodoList.push(newTodoObj);
    console.log(localStorageTodoList);
    localStorage.setItem('todoList', JSON.stringify(localStorageTodoList));
}
function removeTodoFromLocalStorage(taskToBeDeleted){
    let localStorageTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
    console.log(localStorageTodoList)
    localStorageTodoList = localStorageTodoList.filter((todo)=>{
        console.log(todo)
        return todo.name !== taskToBeDeleted
    })
    console.log(localStorageTodoList);
    localStorage.setItem('todoList', JSON.stringify(localStorageTodoList));

}
function addTaskInDom(task){
    const individualTaskContainer = document.createElement('div');
    const tempSpan = document.createElement('span');
    tempSpan.innerText = task;

    const delTask = document.createElement('button');
    delTask.textContent = 'Delete';
    delTask.addEventListener('click', (e)=>{
        removeTodoFromLocalStorage(task);
        individualTaskContainer.remove();

    })
    const markImporantBtn = document.createElement('button');
    markImporantBtn.textContent = 'Mark Imporant';
    markImporantBtn.addEventListener('click', (e)=>{
        individualTaskContainer.classList.toggle('markImportant')
    })

    /*Append the created elements  */
    individualTaskContainer.append(tempSpan);
    individualTaskContainer.append(delTask);
    individualTaskContainer.append(markImporantBtn);
    displayTasksTag.append(individualTaskContainer);
}

document.querySelector('#addTask').addEventListener('click', ()=>{
    const newTask = inputBox.value;
    /*  */

    /* Create the individual todo */
    addTaskInDom(newTask)
    

    /* Append in local storage */
    addTodoInLocalStorage(newTask);
    
    
    inputBox.value = '';
})

// localStorage.setItem('name', 'naman');
// localStorage.setItem('age', '10');

// localStorage.setItem('name', 'new valuie')

// const newName = localStorage.getItem('name');
// console.log(newName);

// localStorage.removeItem('name');

// localStorage.setItem('user', JSON.stringify({
//     'name': 'naman',
//     'age': 10
// }))

// console.log(JSON.parse(localStorage.getItem('user')));


// sessionStorage.setItem('name', 'Manju');
// sessionStorage.getItem('name');
// sessionStorage.removeItem()