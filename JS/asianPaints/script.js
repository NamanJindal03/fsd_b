const applyBtn = document.querySelector('#apply-btn');
const resetBtn = document.querySelector('#reset-btn');
const paintWalls = document.querySelectorAll('.block');
const wallIdTag = document.querySelector('#wall_id');
const wallColorTag = document.querySelector('#wall_color');



// function paintTheWall(wallId, wallColor, styleToBeAdded)

applyBtn.addEventListener('click', () =>{
    let wallId = wallIdTag.valueAsNumber; //parseInt()
    if(wallId > 10 || wallId <= 0){
        return;
    }
    let wallColor = wallColorTag.value;
    wallIdTag.value = '';
    wallColorTag.value = '';
    paintWalls[wallId-1].style.backgroundColor = wallColor;
})

resetBtn.addEventListener('click', () =>{
    for(let paintWall of paintWalls){
        paintWall.style.backgroundColor = 'transparent';
    }
})

