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
// const APIReturnedData = {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }
// function getDataFromBackend(url){

//     const xhr = new XMLHttpRequest();
//     console.time()
//     xhr.open('Get', url, true);
//     xhr.onload = function (){
//         console.timeEnd();
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
//     xhr.send()
//     // setTimeout(()=>{
//     //     console.log(APIReturnedData)
//     // },1000)
// }
// getDataFromBackend('https://jsonplaceholder.typicode.com/todos/1' )

// console.time()
// console.log('first')
// setTimeout(()=>{
//     console.log('mid')
// },3000);
// console.log('end')
// console.timeEnd()

/* 
    A ->
    B ->
    C ->
    D ->

*/

// console.log("start");

// function delay(text) {
//   setTimeout(function () {
//     console.log(text);
//   }, 5000);
// }

// delay("A");

// delay("B");

// delay("C");

// delay("D");

// console.log("end");

// let count = 1;

// function delay(text) {
//   setTimeout(function () {
//     console.log(text);
//   }, 500 * count++);
// }
// delay('abcd')

// console.log("start");

// setTimeout(function () {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");

//     setTimeout(function () {
//       console.log("C");

//       setTimeout(function () {
//         console.log("D");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log("end");

//Is callbacks always asynchronous?


// function receiveCb(cb){
//     cb();
// }

// receiveCb(function(){
//     console.log('I am a callback, but please dont execute me asynchronously')
// })

//callbacks -> 
// console.log('start');
// setTimeout(()=>{
//     console.log('mid')
// },3000)
// console.log('end')
import getProducts from './externalCode.js'

const id = 10;
// api.getProducts()
const product = getProducts()
product.then(()=>{
    console.log('products list success')
})
.catch(()=>{
    console.log('error on the external entity')
})
console.log(product)
const apiResponse = 'error';
//execution of the same code with promises 
console.log('start');


// console.log(promiseOutput);
// promiseOutput.then(()=>{
//     console.log('list of all products fromt he backend')
// })
// console.log('end')

// const promiseState = new Promise((resolve, reject)=>{

// })

// console.log(promiseState);
// promiseState.then(()=>{
//     console.log('please help me in executing')
// })
// .catch(()=>{
//     console.log('please reject me')
// })


// console.log('start')
// const promiseOutput = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },10000)
// })
// console.log(promiseOutput);
// promiseOutput.then(()=>{
//     console.log('mid')
// })

// console.log('end');


// function getPromise(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log('this is logged')
//             reject();
//         },1000)
//     })
//     // return internalFuncPromsie;
// }

// const promiseValueNew = getPromise();
// promiseValueNew.then(()=>{
//     console.log('this is called because of resolve')
// })
// console.log(promiseValueNew)
// getPromise()
//     .then(()=>{
//         console.log('this is called becuase of promise')
//     })
//     .catch(()=>{
//         console.log('error is seen')
//     })


// function random(){
//     // console.log('abcd')
//     return 10;
// }

// const storeRandom = random();
// console.log(storeRandom);

// const abcd = 20;


// function processPayment(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log('this is logged')
//             // reject();
//             // resolve('payment success')
//             reject({error: 'user payment timed out '})
//         },1000)
//     })
//     // return internalFuncPromsie;
// }





// processPayment()
//     .then((data)=>{
//         // console.log('this is called becuase of promise')
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err.error)
//     })

/* 
    fetch is a promise based web api -> which helps us in calling
    the api of some external services/ codes

*/

// const apiResponse = fetch('https://jsonplaceholder.typicode.com/todos/1');
// apiResponse.then(()=>{
//     console.log('api executed')
// })
// .catch(()=>{
//     console.log('api failed')
// })
// console.log(apiResponse)

// const timer = setTimeout(()=>{
//     console.log('abcd')
// }, 1000)
// clearTimeout(timer);