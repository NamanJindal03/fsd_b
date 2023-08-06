const inputBox = document.querySelector('#task');
const displayTasksTag = document.querySelector('#displayTasks');

document.querySelector('#addTask').addEventListener('click', ()=>{
    const newTask = inputBox.value;

    /* Create the individual todo */
    const individualTaskContainer = document.createElement('div');
    const tempSpan = document.createElement('span');
    tempSpan.innerText = newTask;
    const delTask = document.createElement('button');
    delTask.textContent = 'Delete';
    delTask.addEventListener('click', (e)=>{
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
    
    inputBox.value = '';
})