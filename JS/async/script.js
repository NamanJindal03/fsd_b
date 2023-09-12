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
// import getProducts from "./externalCode.js";

// const id = 10;
// // api.getProducts()
// const product = getProducts();
// product
//   .then(() => {
//     console.log("products list success");
//   })
//   .catch(() => {
//     console.log("error on the external entity");
//   });
// console.log(product);
// const apiResponse = "error";
// //execution of the same code with promises
// console.log("start");

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

// const promiseStore = new Promise((resolved, rejected)=>{

// });
// setTimeout(()=>{
//     console.log(promiseStore);
// },5000);

// const apiResponse = fetch('https://jsonplaceholder.typicode.com/todos/1');
// apiResponse.then(()=>{
//     console.log('api executed')
// })
// .catch(()=>{
//     console.log('api failed')
// })
// function randomPrint(r) {
//   console.log(r);
// }
// const apiResponse2 = fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "GET",
// })
//   .then((data) => {
//     // console.log('api executed')
//     // console.log(data);
//     return data.json();
//   })
//   .then((result) => {
//     // console.log(abcd);
//     // console.log(result);
//     randomPrint(result);
//   })
//   .catch((err) => {
//     console.log(err);
//     // console.log('api failed')
//   });

// const nestedCallbacks = () => {
//     setTimeout(()=>{
//         setTimeout(()=>{

//         },500)
//     }, 1000)
// }

/* 
    fetch() -> function not written by us -> 
    who will determine what we pass to this fetch() ???

    the first argument is a url -> 
    the second argument is a optional orgument -> which goes by the name of options ->

    fetch(url, options) //information that fetch expects -> 

    {
        method: 
    }

*/

// function read({ title, id:id2 }) {
//   console.log(title, id2);
// }

// const callapi = fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "GET",
// })
//   .then((data) => {
//     // return JSON.parse(data)
//     return data.json();
//   })
//   .then((data)=>{
//     read(data[0]);
//   })

//   .catch(() => {
//     console.log("error");
//   });


// const promiseFunc = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({name: 'naman'})
//         },3000)
//     })
// }
// const promiseVal = promiseFunc()

//You have to covert the given promise based code to callbacks approach ->

// const promiseFunc = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve({name: 'naman'})
//         },3000)
//     })
// }
// promiseFunc().then(()=>{
//     console.log('phone bought');
//     console.log('laptop bought');
//     console.log('charger bought');
// })

// function printData() {
//     setTimeout(()=>{
//         console.log('phone bought');
//         console.log('laptop bought');
//         console.log('charger bought');
//     },3000)
// }

// printData()


//getProducts 
//getCategories ->

// const categories = [
//   {
//     category: 'healthCare',
//     products: 140,
//     sellersInvolved: 20
//   },
//   {
//       category: 'toys',
//       products: 10,
//       sellersInvolved: 2
//   },
// ];

// const products = 
//   {
//     healthCare: [{
//         name: 'medicine1',
//         qty: 10,
//         brand: 'abcd'
//       },
//       {
//         name: 'medicine2',
//         qty: 20,
//         brand: 'abcd2'
//       },
//     ],
//     toys: [
//       {
//         name: 'toy1',
//         qty: 10,
//         brand: 'abcd'
//       },
//       {
//         name: 'toy2',
//         qty: 20,
//         brand: 'abcd2'
//       },
//     ],
//   }

//   const errResposne = {
//     status: 400,
//     errorMessage: 'Please provide the category'
//   }
// //getCategories API
// const getCategories = () =>{
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       resolve(categories)
//     },1000)
//   })
// }

// //getProductDetails API
// const getProductsDetails = (category) =>{
//   return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//       if(!category) reject(errResposne)
//       // if(category === 'healthcare'){
//         resolve(products[category])
//       // }
      
//     })
//   })
// }
/* 
  ABOVE -> Mocking the API ->
*/

/* 
FE -> 
*/
// const categoriesResData = getCategories();
// categoriesResData.then((categoryData)=>{
//   // return 
//   const currentCategory = categoryData[1].category;
//   return getProductsDetails(currentCategory);
// })
// .then((productDetails)=>{
//   console.log(productDetails);
// })

// const productsRes = getProductsDetails()
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

const API = "https://real-puce-turtle-tam.cyclic.cloud/";

//stock/stock-symbols
// let stockName;
// const stockMarketCap = fetch(`${API}stock/stock-market-caps`)
//     .then((data)=>{
//       return data.json();
//     })
//     .then((data)=>{
//       console.log(data)
//       return data;
//     })

// const stockName = fetch(`${API}stock/stock-symbols`)
//     .then((data)=>{
//       return data.json();
//     })
//     .then((data)=>{
//       console.log(data)
//       return data;
//     })

//     console.log(stockMarketCap);
//     console.log(stockName);

// let marketCapData;
// let stockNameData;
// function getHighestMarketCapStockDetails(){
//   fetch(`${API}stock/stock-market-caps`)
//     .then((data)=>{
//       return data.json();
//     })
//     .then((stockMarketCapData)=>{
//       marketCapData = stockMarketCapData;
//       return fetch(`${API}stock/stock-symbols`);
//     })
//     .then((data)=>{
//       return data.json();
//     })
//     .then((stockNameDataFromAPI)=>{
//       stockNameData = stockNameDataFromAPI;
//       console.log(stockNameData);
//       console.log(marketCapData);

//       const sortedMarketCapData = marketCapData.sort((stockA, stockB)=>{
//         return stockB['market-cap'] - stockA['market-cap']
//       })
//       const topMarketCapStock = sortedMarketCapData[0];
//       const [filteredStockName] = stockNameData.filter((stock)=>{
//         return stock.symbol === topMarketCapStock.symbol
//       })
//       console.log(filteredStockName);
//       console.log(topMarketCapStock);
//       const consolidatedData = {...filteredStockName, ...topMarketCapStock};
//       console.log(consolidatedData);
//     })

// }
// getHighestMarketCapStockDetails();

//make todo list
//do todo 1
//do todo 2
//do todo 3
//relax

// function executeTasks(){
//   setTimeout(()=>{
//     console.log('make todo list')
//     setTimeout(()=>{
//       console.log('do todo 1');
//       setTimeout(()=>{
//         console.log('do todo 2')
//         setTimeout(()=>{
//           console.log('do todo 3')
//           setTimeout(()=>{
//             console.log('relax')
//           }, 10000)
//         }, 500)
//       }, 3000)
//     }, 2000)
//   }, 1000)
// }
// executeTasks();

// setTimeout(()=>{
//   console.log('task1')
// },500)
// setTimeout(()=>{
//   console.log('task2')
// },1000)

/* 
    Razorpay code -> this is a black box for us -> 
// */
// function executePayment(cb1, cb2){
//   //vlaidating usser information

//   //validating user payment details 
//   //validating a bunch fo more stuff
//   //receiving the payment 
//   cb1()
//   cb1()
//   cb1()
//   cb2()
// }


//Razorpay -> payment gateway -> exexutePaymnet
//callbacks -> 

// let userBilled = 1000;

// executePayment(
//   chargeTheUser,
//   displayOrderProcessed
// )


// function chargeTheUser(userBilled){
//   console.log('user charged', userBilled);
// }


/* 
  Trusting the company who we pass our callback that they will basically 
    1) execute our funciton on right time 
    2) execute our function right number of times 
    3) if certain error comes up they will let us know 

*/



// executePayment()
//   .then(()=>{
//     chargeTheUser()
//   })
//   .then(()=>{
//     displayOrderProcessed()
//   })
//   .catch(()=>{
//     console.log('order cannot be processed')
//   })






// let marketCapData;
// let stockNameData;
// // const API = "https://real-puce-turtle-tam.cyclic.cloud/";

// async function getHighestMarketCapStockDetails(){
//     try{
//     const apiResponse = await fetch(`${API}stock/stock-market-caps`)
//     marketCapData = await apiResponse.json()
//     const apiResponse2 = await fetch(`${API}stock/stock-symbols`)
//     stockNameData = await apiResponse2.json()
//     const sortedMarketCapData = marketCapData.sort((stockA, stockB)=>{
//         return stockB['market-cap'] - stockA['market-cap']
//       })
//       const topMarketCapStock = sortedMarketCapData[0];
//       const [filteredStockName] = stockNameData.filter((stock)=>{
//         return stock.symbol === topMarketCapStock.symbol
//       })
//       console.log(filteredStockName);
//       console.log(topMarketCapStock);
//       const consolidatedData = {...filteredStockName, ...topMarketCapStock};
//       console.log(consolidatedData);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getHighestMarketCapStockDetails()















// function executeSomeAPI(cb){
//   setTimeout(()=>{//api work
//     cb()//my work
//   },1000)
// }

// executeSomeAPI(function(){})



// function executeSomeAPIThroughPromise(){
//   //api work
//   return new Promise((resolve, reject)=>{
//     resolve();
//   })
// }




// async function middleware(){
//   await placeOrder()
// }

// middleware()

// placeOrder().then((message) => {
//   console.log(message);
// })

// .catch((err)=>{
//     console.log(err)
// })
// await placeOrder();

