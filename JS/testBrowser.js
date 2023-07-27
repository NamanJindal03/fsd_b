// console.log(document);

/* 
    2 categories 

    1) Specific Selections
        c) getElementByTagName
        A) getElementById
        b) getElementByClassName
        

    2) Generic Selections 
        A) querySelector
        B) querySelectorAll

*/

// console.log();

// const h1TagList = document.getElementsByTagName('h1');
// console.log(h1TagList[0]);
// console.log(h1TagList[1]);

// const pTagList = document.getElementsByTagName('p');
// console.log(pTagList);

// // const randomH1Element = document.getElementById('randomH1');
// // console.log(randomH1Element);

// const c1ClassElements = document.getElementsByClassName('c1');
// console.log(c1ClassElements);

/* 
    class => .
    id => #
*/

// const q1Element = document.querySelector('#randomH1');
// console.log(q1Element);

// const q1Element2 = document.querySelector('.c1');
// const q1Element3 = document.querySelector('h1');
// console.log(q1Element2);
// console.log(q1Element3);

// const q1Element = document.querySelectorAll('#randomH1');
// console.log(q1Element);

// const q1Element2 = document.querySelectorAll('.c1');
// const q1Element3 = document.querySelectorAll('h1');
// console.log(q1Element2);
// console.log(q1Element3);

// const q1Element3 = document.querySelector('h1');
// console.log(q1Element3.innerText);




/* 
    querySelectorAll -> on a certain tagName

    result[3] => (not  undefined)
*/
// const result = document.querySelectorAll('p');
/* 
    Node list -> array of nodes ->

*/
// console.log(result[3]);

// const nestedTag = document.querySelectorAll('div');

// const randomNumber = Math.floor(Math.random()*20)
// console.log(randomNumber);
// for(let i=0; i<randomNumber; i++){
//     console.log(i);
//     if(i === 10){
//         const allDivTags = document.querySelectorAll('div');
//         // allDivTags[0].innerText = 'You are a winner';
//         for(let divTag of allDivTags){

//             if(divTag.innerText == 'this is div text2323'){
//                 //I will be changing its color to red
//                 divTag.style.color = 'red';
//                 divTag.style.backgroundColor = 'rgb(0, 255, 0)';
//                 divTag.style.fontSize = '4rem';
//                 continue;
//             }

//             divTag.innerText = "You are all winners"


//         }
//     }
// }
// const nestedTag = document.querySelectorAll('div');
// nestedTag[2].classList.add('classToBeAdded', 'check2Class');
// console.log(nestedTag[2].classList);
// const classToBeAddedELemenets = document.querySelectorAll('.classToBeAdded');
// console.log(classToBeAddedELemenets);

// for(let elem of classToBeAddedELemenets){
//     elem.style.textDecoration = 'underline';
// }
// const idSelect = document.getElementById('demoId')


// for(let elem of nestedTag){
//     // console.log(elem.classList);
//     // if (elem.classList.contains('classToBeAdded')){
//     //     elem.style.textDecoration = 'underline';
//     // }
//     if(Array.from(elem.classList).includes('classToBeAdded')){
//         elem.style.textDecoration = 'underline';
//     }
// }


// nestedTag[1].classList.remove('classToBeAdded');

// function test(){
//     document.querySelector('random');
// }

// document.body.classList.add('bg-dark');