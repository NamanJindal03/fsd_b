// console.log('one');

// setTimeout(()=>{
//     console.log('two');
// }, 1000)

// // for(let i=0; i< 100000000; i++){
// //     console.log(i)
// // }

// console.log('three');

// console.log('one');

// setTimeout(()=>{
//     console.log('two');
// }, 0)

// // for(let i=0; i< 100000000; i++){
// //     console.log(i)
// // }

// console.log('three');

// const productDisplayAreaTag = document.querySelector('#productsDisplay')
// const companyAProducts = [
//     {
//         productName : 'samsung s22',
//         price: 200,
//         description: 'good phone'
//     },
//     {
//         productName : 'iphone 4s',
//         price: 22,
//         description: 'somethign'
//     },
// ];

// for(let product of companyAProducts){
//     const productContainerElement = document.createElement('div');
//     const h1Tag = document.createElement('h1');
//     h1Tag.textContent = product.productName;
//     const spanTag = document.createElement('span');
//     spanTag.textContent = product.price;
//     const descriptionTag = document.createElement('div');
//     descriptionTag.textContent = product.description;
//     productContainerElement.append(h1Tag);
//     productContainerElement.append(spanTag);
//     productContainerElement.append(descriptionTag);
//     productDisplayAreaTag.append(productContainerElement);
// }

// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')
// const contentDisplay = document.querySelector('#contentDisplay')
// btn1.addEventListener('click', ()=>{
//     contentDisplay.textContent += 'Added through JS-----'
// })

// btn2.addEventListener('click', blockJS)

// function blockJS(){
//     console.log('JS thread is blocked')
//     let abcd = 0;
//     for(let i=0; i<10000000000; i++){
//         abcd++;
//     }
//     console.log('JS thread is unblocked')
// }

// console.log("one");

// setTimeout(() => {
//   console.log("two");
// }, 5000);

// console.log("three");

//I am second ->
/* 
    One 
    three
    ----- a little wait ---
    two
    ------a little wait ----
    I am second 
*/
// console.log("one");

// const randomTimeFunc = () => {
//     return Math.floor(Math.random()*1000)
// }

// setTimeout(() => {
//   console.log("two");

//   setTimeout(() => {
//     console.log("i m the x");
//   }, randomTimeFunc());

//   setTimeout(() => {
//     console.log("i m the x 2");
//   }, randomTimeFunc());

// }, randomTimeFunc());

// console.log("three");

/* 
    one
    three
    two
    I am the x
    I am the x 2
*/

// setTimeout(() => {
//     console.log("i m the x 1");
//   }, randomTimeFunc());
//   setTimeout(() => {
//     console.log("i m the x 2");
//   }, randomTimeFunc());
//   setTimeout(() => {
//     console.log("i m the x 3");
//   }, randomTimeFunc());
//   setTimeout(() => {
//     console.log("i m the x 4");
//   }, randomTimeFunc());
//   setTimeout(() => {
//     console.log("i m the x 5");
//   }, randomTimeFunc());
//   setTimeout(() => {
//     console.log("i m the x 6");
//   }, randomTimeFunc());

  /* 
    How to we handle async code
    2) how do we call the api
    3) How to we manage the relationships between the API
  
  */

// var abcd = 10;
// var abcd2 = 20;
// console.log(abcd);
// console.log(abcd2);

// (() => {
//     var abcd = 10;
//     var abcd2 = 20;
//     console.log(abcd);
//     console.log(abcd2);
// })()

// console.log('start')
// setTimeout(()=>{
//     console.log('mid1')
// },0)
// setTimeout(()=>{
//     console.log('mid2')
// },100)
// setTimeout(()=>{
//     console.log('mid3')
// },200)
// setTimeout(()=>{
//     console.log('mid4')
// },50)
// setTimeout(()=>{
//     console.log('mid5')
// },1000000000)
// console.log('endd');
// let abcd = 0;
// for(let i=0; i<1000000000; i++){
//     abcd++;
// }
// function getsExecutedOnCallback
const APIReturnedData = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
function getDataFromBackend(url){

    // const xhr = new XMLHttpRequest();
    // console.time()
    // xhr.open('Get', url, true);
    // xhr.onload = function (){
    //     console.timeEnd();
    //     const data = JSON.parse(xhr.responseText);
    //     console.log(data);
    // }
    // xhr.send()
    setTimeout(()=>{
        console.log(APIReturnedData)
    },1000)
}
getDataFromBackend('https://jsonplaceholder.typicode.com/todos/1' )

// console.time()
// console.log('first')

// console.log('end')
// console.timeEnd()