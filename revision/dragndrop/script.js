// document.querySelectorAll('.taskArea').forEach(setUpDropZone)
document.querySelectorAll('.taskArea').forEach((taskArea)=>{
    taskArea.addEventListener('dragover', onDragOver)
    taskArea.addEventListener('drop', onDrop)
})

document.querySelectorAll('.task').forEach((task)=>{
    task.addEventListener('dragstart', getDraggedElement)
})

// function setUpDropZone(taskArea){
    
// }

function onDragOver(e){
    e.preventDefault();
    // console.log(e.target)
}

function onDrop(e){
    console.log(e.target);
    console.log('something droppped')
}

function getDraggedElement(e){
    console.log(e.target);
}