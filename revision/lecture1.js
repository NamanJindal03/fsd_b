//new Questions ->

//var with different funciton context
// function random(){
//     for(var i=0; i<10; i++){

//         (function(i){
//             // var j =i;
//             setTimeout(()=>{
//                 console.log(i)
//             },0)
//         })(i)
//     }
// }
// random();

// //var output -> 10 * 10
// function random(){
//     for(var i=0; i<10; i++){
//         // var j =i;
//         setTimeout(()=>{
//             console.log(i)
//         },0)
//     }
// }
// random();

// function random2(){
//     for(let i=0; i<10; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, 0)
//     }
// }

// random2();


//old revision Questions
// Revision


// IN js wht is the differnece between undefined and not defined.

// var num; //allocated space for 
// console.log(num) //undefined 

// //not defined?
// console.log(num2); //not defined -> error


// foo(); //here ->
// function foo(){
// 	console.log('here')
// }

// //foo2 = undefined ->

// foo2(); 
// var foo2 = function(){
// 	console.log('here2');
// }

// //Hositing -> 

// //undefined() -> error 

// Q3 -> 
// console.log(!!'string') 

// Q4 What is an IIFE and give an example.
// Immediately invoked function expression ->

// (function abcd(){
// 	console.log('here')
// })()

// for(var i=0; i<10; i++){
// 	setTimeout(()=>{
// 		console.log(i)
// 	},100)
// }


// Q5 What is currying?

// function curry(a){
// 	return function(b){
// 		return a+b;
// 	}
// }
// const store = curry(5);
// console.log(store(3)); //8

// Q6 -> named function and anonymous functions? 

// var namedFunc = function named(){
// 	console.log('abcd');
// }

// var notNamed = function (){
// 	console.log('defg')
// }

// Q7 forEach vs Map -> 

// const a = [10, 20, 40, 50];

// const forEachArr = a.forEach((val, index)=>{
// 	console.log(val+100);
// 	return val + 100;
// })

// const mapArr = a.map((val, index)=>{
// 	console.log(val+100);
// 	return val + 100;
// })


// function random(){
// 	console.log('random')
// }

// random.random = 'random2';
// random();

// Accordian (Famous Component -> Frontend) -> 

// height: 
// overflow: hidden 


// Summary:
// Utmost basics JS -> covered 
// SetTimeout + closure -> covered
// Accordian Question -> Homework ->

// function example(){
//     let x = 10;
//     try{
//         throw new Error("something went wrong");
//     }
//     catch(y){
//         x=y;
//         console.log(x)
//     }
//     console.log(x)
// }
// example();

//Output?
// const obj = {
//     name: 'Nitin',
//     age: 10
// }
// const obj2 = objj;
// obj2.age = 20;
// console.log(obj)
// console.log(obj2)

// function sample10(data){
//     if(data == {name: 'naman'}){
//     	console.log('case 1')
//     }
//     // else if(data === {name: 'naman'}){
//     // 	console.log('case 2')
//     // }
//     else{
//     	console.log('case 3')
//     }
// }

// sample10({name: 'naman'})

// const ob1 = {name: '10'}
// const ob2 = {name: '10'}
// if(ob1 === ob2){
	
// }

// /*  new Questions*/

// function getRandomValues(...args){
// 	//args => [21 ]
// 	console.log(typeof args) //object
// }
// getRandomValues(21);


// const a = {
// 	a: 10,
// 	b: 20,
// 	c: 30
// }

// const b = {
// 	a: 100,
// 	d: 500, 
// 	c: 10
// }

// console.log({...b, ...a}) 
// {
// 	a: 10,
// 	d: 500, 
// 	c: 30,
// 	b: 20,
// }


// const a = {
// 	a: 10,
// 	b: 20,
// 	c: 30
// }
// a.d = 400;
// {
// 	a: 10,
// 	b: 20,
// 	c: 30,
// 	d: 40
// }
// a.c = 50;
// {
// 	a: 10,
// 	b: 20,
// 	c: 50,
// 	d: 40
// }

// new question

// const a = {
// 	a: 10,
// 	b: 20,
// 	c: 30
// }
// const arr = ['a', 'b', 'c'];
// //keys 0: 'a', 1:'b', 2:'c'

// console.log({...a, ...arr})
// function callAPI(API){
//     return fetch(API)
// }

// Promise.all(
//     [callAPI('https://jsonplaceholder.typicode.com/posts'), 
//     callAPI('https://jsonplaceholder.typicode.com/posts/1')] 
// )
// .then(([a,b])=>{
//     return Promise.all([a.json(), b.json()])
// })
// .then(([a,b])=>{
//     console.log(a);
//     console.log(b);
// })
// .catch((err)=>{
//     console.log(err)
// })

// fetch()
// fetch()


/* 
    Social Media Platform

    API -> 
    1) Brings in who all are online 
    2) Brings in the user's feed
    3) Brings in the advertisements
    4) 
    5) 
    6) 
    7) 

*/

const object = {
    name: {
        firstName: 'naman',
        lastName: 'jindal'
    },
    age: {
        officialAge: 20,
        unOfficialAge: 19,
    },
    address: {
        state: 'delhi'
    }
}
const object2 = {
    name: {
        firstName: 'naman',
        lastName: 'jindal'
    },
    age: {
        officialAge: 20,
        unOfficialAge: 19,
    },
}




//object 
//object2

// console.log(object?.address?.state);

if(object.address && object.address.state){
    console.log(object.address.state);
}
else{
    console.log("i can't give you the state")
}
if(object2.address && object2.address.state){
    console.log(object2.address.state);
}
else{
    console.log("i can't give you the state")
}



//currently you dont know  optional chianign -> you are not allowed to use optionakl chaining
//I want if the object contains a valid state -> then give me the state else give me a value
//I can't give you the state 


// console.log(object.name?.familyName?.name);

/* 
    optional chaining
*/

// const validStates = 
// const sample = {
//     address: {
//         state: 'solid'
//     }
// }