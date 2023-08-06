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

localStorage.setItem('name', 'naman');
localStorage.setItem('age', '10');

localStorage.setItem('name', 'new valuie')

const newName = localStorage.getItem('name');
console.log(newName);

localStorage.removeItem('name');

localStorage.setItem('user', JSON.stringify({
    'name': 'naman',
    'age': 10
}))

console.log(JSON.parse(localStorage.getItem('user')));


sessionStorage.setItem('name', 'Manju');
sessionStorage.getItem('name');
// sessionStorage.removeItem()