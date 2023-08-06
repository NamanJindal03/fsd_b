// // const div = document.querySelector('#div1');

// // const h1 = document.querySelector('#h1');

// // const cb = document.querySelector('#cb');

// // const cc = document.querySelector('#cc');

// // cb.addEventListener('click', () => {

// //     div.style.backgroundColor = 'blue'

// // })

// // cc.addEventListener('click', () => {

// //     h1.style.color = 'red'

// // })

// // const btnBg = document.querySelector("#btn1");

// // const btnC = document.querySelector("#btn2");

// // const box = document.querySelector(".box");

// // let randomColor = ['red', 'green', 'blue','orange'];

// // btnBg.addEventListener('click', () => {

// // box.style.backgroundColor = getRandomItem(randomColor);

// // })

// // btnC.addEventListener('click', () => {

// // box.style.color = getRandomItem(randomColor);

// // })


// //TODO: Vikas
// const box = document.getElementById('box');

// // const boxText = document.getElementById('boxText');

// const cbButton = document.getElementById('cb');

// const ccButton = document.getElementById('cc');

// const colors = ['red', 'blue', 'orange', 'green','yellow','purple'];

// // const textColors = ['black', 'white', 'purple', 'yellow','green','pink'];

// function getRandomColor(){
//     return colors[Math.floor(Math.random() * colors.length)];

// }

// cbButton.addEventListener('click', () => {
//     // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     box.style.backgroundColor = getRandomColor();
// });

// ccButton.addEventListener('click', () => {
//     // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     box.style.color = getRandomColor();
// });



//
const Users = [
    {
        name: 'naman',
        age: 10,
        gender: 'm',
        address: 'delhi'
    },
    {
        name: 'Rajat',
        age: 20,
        gender: 'm',
        address: 'banglore'
    },
    {
        name: 'Shreya',
        age: 25,
        gender: 'f',
        address: 'tamil nadu'
    },
    {
        name: 'Tanvi',
        age: 10,
        gender: 'f',
        address: 'chattisgarh'
    },
    {
        name: 'Dilip',
        age: 100,
        gender: 'f',
        address: 'plo'
    },
]


const displayUsersArea = document.querySelector('#displayUsers');

for(let user of Users){
    const tempParentDiv = document.createElement('div');
    tempParentDiv.classList.add('styleBox');
    const tempH1 = document.createElement('h1');
    const tempDiv1 = document.createElement('div');
    const tempDiv2 = document.createElement('div');
    const tempDiv3 = document.createElement('div');
    
    tempH1.innerText = user.name.toUpperCase();
    tempDiv1.innerText = `age - ${user.age}`;
    tempDiv2.innerText = `gender - ${user.gender === 'm' ? 'Male' : 'Female'}`;
    tempDiv3.innerText = `address - ${user.address}`;
    
    tempParentDiv.append(tempH1);
    tempParentDiv.append(tempDiv1);
    tempParentDiv.append(tempDiv2);
    tempParentDiv.append(tempDiv3);
    displayUsersArea.append(tempParentDiv);
}

// const tempParentDiv = document.createElement('div');
//     const tempH1 = document.createElement('h1');
//     const tempDiv1 = document.createElement('div');
//     const tempDiv2 = document.createElement('div');
//     const tempDiv3 = document.createElement('div');
    
//     tempH1.innerText = Users[0].name.toUpperCase();
//     tempDiv1.innerText = `age - ${Users[0].age}`;
//     tempDiv2.innerText = `gender - ${Users[0].gender === 'm' ? 'Male' : 'Female'}`;
//     tempDiv3.innerText = `address - ${Users[0].address}`;
    
//     tempParentDiv.append(tempH1)
//     tempParentDiv.append(tempDiv1)
//     tempParentDiv.append(tempDiv2)
//     tempParentDiv.append(tempDiv3)
//     displayUsersArea.append(tempParentDiv)



const obj = {
    name:'naman',
    age: 10
}

const obj2 = obj

obj2.name = 'something'

console.log(obj)
console.log(obj2)

function receiveReferenceObj (obj){
    obj.name = 'this timt will also change'
}

receiveReferenceObj(obj)


console.log(obj)
console.log(obj2)