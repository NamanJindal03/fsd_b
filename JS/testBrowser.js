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

/*window acts as a entry point to the client side js*/

// document.querySelector('random');

// window.console.log();
// window.console.table();
// window.console.dir();
// window.console.error();
// window.console.warn();

// window.setTimeout();

// window.setInterval();

// window.location
// console.log('i am starting')

// setTimeout(()=>{
//     console.log('I am done with JS'); //
// }, 2000);

// console.log('the file is ending');

// the above time is in ms
//1000ms = 1s
//2000ms = 2s

// function randomTImerExecution(cb, t){
//     setTimeout(()=>{
//         cb();
//     }, t)
// }

// randomTImerExecution(()=>{
//     console.log('get executed')
// }, 1000)

/* 
    All forms of CB
*/
// function random1(){
//     console.log('1')
// }
// const random2 = () => {
//     console.log('random 2')
// }

// const random3 = function(){
//     console.log('random 3')
// }

// setTimeout(random1, 1000)
// setTimeout(random2, 1000)
// setTimeout(random3, 1000)

// setTimeout(()=>{
//     console.log('random 4')
// },1000)

// setTimeout(function(){
//     console.log('random 5')
// },1000)

// const buttonTags = document.querySelectorAll('button');
// buttonTags[0].style.color = 'red';

// setTimeout(()=>{
//     buttonTags[1].style.backgroundColor = 'green';
// }, 2000)

//TODO:
// let count = 0;
// const sIId = setInterval(()=>{
//     count++;
//     console.log(sIId);
//     // buttonTags[1].style.backgroundColor = 'green';
//     console.log('set Interval executed');
//     if(count === 10){
//         //I want to stop the interval from running
//         //why? becuase whateever work I had to do is over

//         //How??

//         clearInterval(sIId);
//     }
// }, 2000)

// const sIId2 = setInterval(()=>{
//     console.log(sIId2);
//     // buttonTags[1].style.backgroundColor = 'green';
//     console.log('set Interval executed')
// }, 2000)

// function() {
//     //add sum
//     let sum = 10 + 20;
//     //multiply xyz
//     let multiply = sum*20;

//     //TODO: return afeter filtering sum and multiply
// }

// const counterStartValueTag = document.getElementById('counter');
// // console.log(typeof parseInt(counterStartValueTag.innerText));
// let counterStartValue = parseInt(counterStartValueTag.innerText);

// // debugger;

// const counterEndValueTag = document.getElementById('countStop');
// let counterEndValue = parseInt(counterEndValueTag.innerText);

// const textNodeTag = document.getElementById('textNode');

// console.log(counterStartValue, counterEndValue);

// const SIID = setInterval(()=>{
//     counterStartValue++;
//     if(counterStartValue === counterEndValue+1){
//         clearInterval(SIID);
//         setTimeout(()=>{
//             textNodeTag.textContent = 'it has changed';
//         }, 3000)
//         return;
//     }
//     counterStartValueTag.textContent = counterStartValue;
// }, 1000)

// const counterStartValueTag = document.getElementById("counter");

// const counterEndValueTag = document.getElementById("countStop");

// let counterStartValue = parseInt(counterStartValueTag.innerText);

// const counterEndValue = parseInt(counterEndValueTag.innerText);

// console.log(counterStartValue, counterEndValue);

// setTimeout(() => {
//   const SIID = setInterval(() => {
//     counterStartValue++;

//     if (counterStartValue === counterEndValue + 1) {
//       clearInterval(SIID);

//       return;
//     }

//     counterStartValueTag.textContent = counterStartValue;
//   }, 1000);
// }, 3000);

// function temp(){

// }
// let count = 0;
// const demoId3tag = document.getElementById('demoId3');
// const pIdTag = document.getElementById('pId');
// console.log(demoId3tag);
// //addEventListrener(<name_of_the_event>, cb)
// //
// demoId3tag.addEventListener('click', ()=>{
//      console.log('demo id 3 tag clicked');
//     //we canperform any action on that

//     //I want to change the text of the clicked element
//     count++;
//     demoId3tag.innerText = 'on click I always change';
//     if(count >=3){
//         pIdTag.style.color = 'green';
//     }

// })

// pIdTag.addEventListener('click', ()=>{
//     console.log('now a different tag is trigger')

//     //we can perform any action on that
// })

// demoId3tag.addEventListener('click', ()=>{
//     console.log('new thing new thign')

//     //we can perform any action on that
// })

/* change */

// const input1Tag = document.getElementById('input1');
// input1Tag.addEventListener('change', ()=>{
//     console.log('i changed');
// })
// input1Tag.addEventListener('focus', ()=>{
//     console.log('now i am focusing on the input');
// })
// input1Tag.addEventListener('blur', ()=>{
//     console.log('now i am blurring on the input');
// })

// /*
//     the above ->add event Listener is teh most preferred way of adding
//     events ->

// */

// function clickTest(){
//     console.log('now I am registering on html and triggered over here')
// }

// // function testDbl(){
// //     console.log('gets triggerd on double click')
// // }

// const testDbl = () => {
//     console.log('the')
// }

// document.getElementById('bigBox')
//         .onclick = function(){
//             console.log('third way of handling')
//         }

// const inputTags = document.querySelectorAll('.numbInput');
// // console.log(inputTags[0].value);

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', ()=>{
//     console.log(parseInt(inputTags[0].value)); //string format
//     console.log(inputTags[1].value)
// })

// const numbInput1Tag = document.getElementById("numbInput1");
// const numbInput2Tag = document.getElementById("numbInput2");
// const sumBtnTag = document.getElementById("sumBtn");

// sumBtnTag.addEventListener("click", () => {
//   // console.log(numbInput1Tag.value)

//   //First handle neagtive scenarios ->
//   if (numbInput1Tag.value === "" || numbInput2Tag.value === "") {
//     console.log("Please enter all the values");
//     return;
//   }

//   console.log(parseInt(numbInput1Tag.value) + parseInt(numbInput2Tag.value));

//   numbInput1Tag.value = "";
//   numbInput2Tag.value = "";
// })
// (() => {})()(function () {})();

// const func = function named() {};
// const func2 = function () {};

// const arrowFunc = () => {};

// const inputTag1 = document.getElementById("input1");

// const inputTag2 = document.getElementById("input2");

// const button = document.getElementById("button");

// const a = parseInt(inputTag1.value);

// const b = parseInt(inputTag2.value);

// button.addEventListener("click", () => {
//   if (inputTag1.value === "" || inputTag2.value === "") {
//     console.log("please provide input");

//     return;
//   }

//   console.log(parseInt(inputTag1) + parseInt(inputTag2));

//   inputTag1.value = "";

//   inputTag2.value = "";
// });

// const bigBoxTag = document.querySelector('#bigBox');
// console.log(bigBoxTag)

// bigBoxTag.addEventListener('mouseenter', ()=>{
//     console.log('entered in the box');
// })
// bigBoxTag.addEventListener('mouseover', ()=>{
//     console.log('hovering in the box');
// })
// bigBoxTag.addEventListener('mouseout', ()=>{
//     console.log('exiting the box');
// })

/* data attribute -> */

// const h1TagsWithH11Name = document.querySelector('h1[id="newH1"]');
// console.log(h1TagsWithH11Name)

// const nestedDiv = document.querySelector('#randomId #r2');
// console.log(nestedDiv)

// const inputBoxes = document.querySelector('[name=checkboxes]');
// console.log(inputBoxes.checked);

/* application of attribute selector */
// const allCheckedBoxes = document.querySelectorAll('input[checked]');
// console.log(allCheckedBoxes);

// allCheckedBoxes.addEventListener('click', ()=>{
//     console.log('I am clicked');
// })

// for(let checkBoxElement of allCheckedBoxes){
//     checkBoxElement.addEventListener('click', ()=>{
//         console.log('clicked')
//     })
// }
// const btnTag = document.querySelector('#sampleBtn');
// btnTag.addEventListener('click', ()=>{

//     const newSelection = document.querySelectorAll(`input[type='checkbox']`);
//     let checkedSelection = [];
//     for(let newSelec of newSelection){
//         if(newSelec.checked){
//             checkedSelection.push(newSelec);
//         }
//     }

//     console.log(checkedSelection);
// })

// btnTag.addEventListener('click', ()=>{

//     const newSelection = document.querySelectorAll(`input[type='checkbox']:checked`);
//     console.log(newSelection);
// })
/* 
    click event listener -> to all the checked checkboxes -> 
*/
// const btnTag = document.querySelector("#sampleBtn");
// btnTag.addEventListener("click", () => {
//   const radBtnSelected = document.querySelector(`input[type='radio']:checked`);
//   console.log(radBtnSelected.value);
// });

// let textData = document.querySelector('input[type="text"]');
// // let radioData = document.querySelectorAll('input[type="radio"]');
// // let checkBoxData = document.querySelectorAll('input[type="checkbox"]');
// let btn = document.querySelector("#sampleBtn");
// let textDisp = document.getElementById("textDisplay");
// let radiOut = document.getElementById("radioOutput");
// let checkBoxData1 = document.getElementById("checkboxesOutput");

// btn.addEventListener("click", function() {
//     const checkBoxValues = []; //arrray -->
//   let radioData = document.querySelectorAll('input[type="radio"]:checked');
//     // console.log(radioData)
//   const radioOutputValue  = radioData[0].value

//     let checkBoxData = document.querySelectorAll('input[type="checkbox"]:checked');
//     console.log(checkBoxData);
//     for(let soloCheckBox of checkBoxData){
//         checkBoxValues.push(soloCheckBox.value)
//     }
// //     textDisp.innerText = textData.value;

//     radiOut.innerText = radioOutputValue;
//     checkBoxData1.innerText = JSON.stringify({name: 'naman'});

// //   if ((checkBoxData, "checked")) {
// //     checkBoxData1.innerText = checkBoxData.value;
// //   }

// // const obj = {name: 'naamn'}.toString()
// });

// const ans = arr.map(function(val, index, fullArray){

// })
// const ansReducec = arr.reduce(function(initialvalue, current, fullArray){

// }, 10)

// const ansReducec2 = arr.reduce((initialvalue, current, fullArray)=>{

// }, 10)

// const ans2 = arr.map(randomFunc)



const divTag = document.querySelector('#div1');
console.log(divTag);
// divTag.addEventListener('click', (event)=>{
//     console.log(event.target.innerText); //
//     event.preventDefault();
//     //preventDefault()
// })

const form = document.querySelector('form')
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('my own event 2')
})
// form.addEventListener('submit', ()=>{
//     console.log('my own event')
// })
// form.addEventListener('submit', ()=>{
//     alert('abcd');
// })

document.querySelector('a')
        .addEventListener('click', (e)=>{
            e.preventDefault();
            console.log('some log')
        })