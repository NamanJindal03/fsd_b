// function User(name, age, count){
//     this.name = name;
//     this.age = age;
//     this.count = count
// }

// const u1 = new User('naman', 10, 2);
// const u2 = new User('abcd', 20, 0);

// User.prototype.getName = function(){
//     return this.name
// }
// User.prototype.increment = function(){
//     this.count++;
// }

// u1.increment();
// u2.increment();
// u1.increment();
// console.log(u1.count);
// console.log(u2.count);

// function User(name, age){
//     const newObject = {};
//     newObject.name = name;
//     newObject.age = age;
//     return newObject;
// }
// const u1 = User('naman', 10);
// const u2 = User('abcd', 20);

// console.log(u1.name);
// console.log(u1.age);
// console.log(u2.name);
// console.log(u2.age);

// const commonPlace = {
//     getName : function(){
//         this.name;
//     },
//     increase: function(){
//         this.score++
//     }
// }

// function User(name, age, score){
//     const newObject = Object.create(commonPlace);
//     newObject.name = name;
//     newObject.age = age;
//     newObject.score = 0;
//     // newObject.getName = function(){
//     //     return newObject.name
//     // }
//     // newObject.increase = function(){
//     //     newObject.score++;
//     // }
//     return newObject;
// }
// const u1 = User('naman', 10, 0);
// const u2 = User('abcd', 20, 10);

// console.log(u1.name);
// console.log(u1.age);
// console.log(u2.name);
// console.log(u2.age);
// u1.increase();
// console.log(u1.score);
// u1.increase()
// console.log(u1.score);
// u2.increase();
// console.log(u2.score);

// // const user1 = {
// //     name: 'naman',
// //     age: 10,
// //     add: 'delhi'
// // }
// // const user2 = {
// //     name: 'abcd',
// //     age: 20,
// //     add: 'maharashtra'
// // }

// // const obj = {};
// // const obj2 = Object.create({})

// // u1.__proto__.something = 'some'
// u2.__proto__ = {};

// function random(){
//     console.log('abcd');
// }

// random.newProperty = 'newP';

// User.prototype.newProperty2 = function(){
//     console.log('I am the new oen')
// }

// function User(name, age, count) {
//   this.name = name;
//   this.age = age;
//   this.count = count;
// }

// const u1 = new User("naman", 10, 2);
// const u2 = new User("abcd", 20, 0);

// User.prototype.getName = function () {
//   return this.name;
// };
// User.prototype.increment = function () {
//   this.count++;
// };
// User.prototype.name = "this is not naman";

// // u1.increment();
// // u2.increment();
// // u1.increment();
// // console.log(u1.count);
// // console.log(u2.count);

// console.log(u1.hasOwnProperty('name'))
// console.log(u1.hasOwnProperty('age'))
// console.log(u1.hasOwnProperty('count'))
// console.log(u1.hasOwnProperty('getName'))

// console.log({})

// const objectInstance1 = new Object();
// objectInstance1.name = 'declaredByNaman';
// objectInstance1.randomProp = 'random';
// console.log(objectInstance1);

// const abcd = function func1(){
//     console.log('abcd');
// }

// const arr = [10, 20, 30];
// function customMap(arr, cb) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
//   return newArr;
// }
// customMap(arr, cb);

// const newMpArr = arr.map((val, index, completeArr)=>{

// })

//polyfill ->
// const arr = [10, 20, 30, 40]
// Array.prototype.customMap = function(cb){
//     const tempArr = [];
//     for(let i=0; i<this.length; i++){
//         tempArr.push(cb(this[i], i, this));
//     }
//     return tempArr;

// }
// const mpArr = arr.customMap((val, index, completeArr) => {
//   return val + 200;
// });
// console.log(mpArr); // ['undefiend', 'undefined'];

// const newMpArr = arr.map((val, index, completeArr)=>{
//     return val + 200;

// })
// console.log(newMpArr);

//write a polyfill for map
//write a polyfill for filter
//reduce
//find
//bind -> 






// //answer1
// const arr = [1, 2, 3, 4, 5];

// arr.prototype.customMap = function (cb) {
//   const tempArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     tempArr.push(cb(arr[i], i, arr));
//   }

//   return tempArr;
// };

// arr.customMap((val) => {
//   console.log(val);
// });
// //asnwer2
// Array.prototype.mapCustom = function mapCustom ( func ) {

//     const newArr = [];
    
//     for ( let i = 0; i < this.length; i++ ) {
    
//     newArr.push( func( this[i] ) );
    
//     }
    
//     return newArr;
    
//     }


// function User(name, age, count) {
//   this.name = name;
//   this.age = age;
//   this.count = count;
// }

// const u1 = new User("naman", 10, 2);
// const u2 = new User("abcd", 20, 0);

// User.prototype.getACombinedUser = function () {
//   const that = this;
//   const internalCall1 = () => {
//     //does few 100 lines of code
//     return that.name
//   }
//   const internalCall2 = () => {
//     //does 10-15 lines of code
//     return that.age
//   }
//   const internalCall3 = () => {
//     //does 10-15 lines of code
//     return that.count
//   }
//   const combined = `${internalCall1()} ${internalCall2()} ${internalCall3()}`
//   return combined;
// };
// User.prototype.increment = function () {
//   this.count++;
// };

// console.log(u1.getACombinedUser());

// User.prototype.getACombinedUser = function () {
//   function internalCall1(){
//     //does few 100 lines of code
//     return this.name
//   }
//   function internalCall2(){
//     //does 10-15 lines of code
//     return this.age
//   }
//   function internalCall3(){
//     //does 10-15 lines of code
//     return this.count
//   }
//   const combined = `${internalCall1.call(this)} ${internalCall2.call(this)} ${internalCall3.call(this)}`
//   return combined;
// };


// class User{
//   constructor(name, age, count) {
//     this.name = name;
//     this.age = age;
//     this.count = count;
//   }
//   increment(){
//     this.count++;
//   }
// }
// const u3 = new User('a', 100, 1000);;
// console.log(u3);

/* 
  [[Prototype]]
  prototype 
  what is the difference between them?

*/
/* 
function Parent(lastName, address){
  this.lastName = lastName;
  this.address = address;
}

const child = {
  name: 'naman',
  age: 10
}

Parent.call(child, 'abcd', 'delhi');
console.log(child); */


// function Parent(lastName, address){
//   this.lastName = lastName;
//   this.address = address;
// }
// Parent.prototype.getLastName = function () {
//   return this.lastName;
// }

// function Child (name, age, lastName, address) {
//   Parent.call(this, lastName, address); //function -> 
//   this.name = name;
//   this.age = age;
// }


// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.getFirstName = function(){
//   return this.name;
// }

// const c1 = new Child('naman', 10, 'abcd', 'delhi')
// // Parent.call(c1, 'abcd', 'delhi');
// const c2 = new Child('naman2', 20, 'defg', 'banglore');
// // Parent.call(c2, 'abcd', 'delhi');
// const p1 = new Parent('aaaaa', 'd');

// console.log(c1);
// console.log(c1.getFirstName());
// console.log(c1.getLastName());
// console.log(c2);
// console.log(c2.getFirstName());
// console.log(c2.getLastName());



// class User{
//   constructor(name, age, useCase){
//     this.name = name;
//     this.age = age;
//     this.useCase = useCase;
//   }
// }

// class PremiumUser {
//   constructor(name, age, useCase, rechargeValue, endingDate, usersPending){
//     this.name = name;
//     this.age = age;
//     this.useCase = useCase;
//     this.rechargeValue = rechargeValue;
//     this.endingDate = endingDate;
//     this.usersPending = usersPending;
//   }
// }

// class AdminUser {

// }

// class ModertorUser{

// }

class Parent{
  // constructor(lastName, address){
  //   this.lastName = lastName;
  //   this.address = address;
  // }
  // getLastName = function () {
  //   return this.lastName;
  // }
  getFirstName = function(){
    return this.name;
  }
}

class Child extends Parent{
  constructor(name, age, lastName, address) {
    // super(lastName, address); //function -> 
    this.name = name;
    this.age = age;
  }
  getFirstName = function(){
    return this.name;
  }
}

const c1 = new Child('naman', 10, 'abcd', 'delhi');
const c2 = new Child('naman2', 20, 'defg', 'banglore');
console.log(c1);
console.log(c1.getFirstName());
// console.log(c1.getLastName());
console.log(c2);
console.log(c2.getFirstName());
// console.log(c2.getLastName());

// function StopWatch()
// {
//     let startTime;
//     let duration;
//     this.start = function(){
//         if(startTime){
//             return 'StopWatch is already running';
//         }
//         startTime = new Date().getTime();
//     }
//     this.stop = function(){
//         if(!startTime){
//             return 'Stopwatch is not started';
//         }
//         duration = new Date().getTime() - startTime;
//     }
//     this.duration = function(){
//         return duration;
//     }
// }
// const obj = new StopWatch();

// //Example 1
// obj.start();
// setTimeout(() => {
//   obj.stop();
//   console.log(obj.duration) // prints 1000
// },1000)

// //Example 2
// const obj2 = new StopWatch();
// obj2.start(); //
// console.log(obj2.start()) //prints "Stopwatch is already running"

// //Example 3
// obj2.stop(); //watch gets stopped
// console.log(obj2.stop()) //prints "Stopwatch is not started"

/* 
  we have a personStore object
  1) Inside personStore object, create a property green where the value is a function that
  logs hello
  2) 

*/