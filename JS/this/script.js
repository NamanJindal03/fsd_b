// function ask(){
//     console.log(this);
// }
// ask();
// console.log(this)
// console.log(this.age); //
// console.log(this.name); //
/* 
    the value of this in default functions is not dependent where the this is present, it is 
    dependent on how we are calling the function -> 
*/

// function ask2(){
//     function ask(){
//         console.log(this);
//         // console.log(10);
//     }
//     return ask;
// }
// const stored = ask2();
// stored();
// var person3 = {
//     name: 'something'
// }

// var person = {
//     ask(){
//         // console.log(this);
//         // console.log(this.name, this.abcd, this.ask2);

//         function withinPerson(){
//             console.log(this);
//         }
//         return withinPerson

//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('i am ask 2')
//     },
// }
// // console.log(person.ask)
// // console.log(person.ask2)
// // console.log(person.ask3)
// // person3.ask()

// // const variable = person.ask();
// // variable();
// person.ask()();


// var person = {
//     ask(){
//         function withinPerson(){
//             console.log(this);
//         }
//         withinPerson();
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('i am ask 2')
//     },
// }
// person.ask();


// function random(){
//     console.log(this);
// }
// var person = {
//     ask(){
//         this.random();
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log('i am ask 2')
//     },
// }
// person.ask();

// var person = {
//     ask(){
//         this.ask2();
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log(this);
//     },
// }
// person.ask();

// var person = {
//     ask(){
//         return this.ask2;
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log(this);
//     },
// }
// const check = person.ask();
// check();


// function abcd(cb){
//     const returned = cb();
//     returned();
// }

// var person = {
//     ask(){
//         console.log(this);
//         return this.ask2
//     },
//     name: 'naman',
//     age: 10,
//     ask2: function(){
//         console.log(this);
//     },
// }
// const check = person.ask;
// abcd(check);

// function ask(article, article2){
//     console.log(this); //
//     console.log(this.name);
//     console.log(article);
//     console.log(article2)
// }

// var person = {
//     name: 'naman',
//     age: 10,
//     add: 'delhi'
// }

// var station = {
//     name:'stationstation',
//     location: 'delhi',
//     pincode: 110034
// }

// ask.call(person, 370, 500);
// ask.apply(person, [370, 500]);

// ask.call(person);
// ask.call(station);

// const askFunctionBindedWithPerson = ask.bind(person);
// askFunctionBindedWithPerson();

// ask.bind(person);
// const askFunctionBindedWithPerson = ask.bind(person);
// askFunctionBindedWithPerson();

// const askFunctionBindedWithstation = ask.bind(station);
// askFunctionBindedWithstation();
///million lines of code 


// setTimeout(() => ask.call(person), 1000);

// var personDemo = {
//     name: 'naman',
//     age: 10,
//     add: 'delhi',
//     ask(){
//         console.log(this); //
//     }
// }

// ask();

// personDemo.ask();


// person.call(station);


// function logger(){

//     //assumption is I am sending this data to my email -> toEmail()
//     toEmail(this)

// }
//addEventListener -> call, bind and apply -> 

// const object = {
//     message: 'js',
//     getMessage(){
//         const message = 'react'
//         return this.message
//     }
// }
// const stored = object.getMessage();


// function ask(...arr){
//     console.log(this.name); //
//     console.log(arr[0][3]);
//     console.log(arr[0][1]); //array itseld
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// var person = {
//     name: 'naman',
//     age: 10,
//     add: 'delhi'
// }

// ask.call(person, [500, 1000, 300], 'abcd', 'defg')



// function ask(arg1, arg2, arg3){
//     console.log(this.name); //
//     console.log(arg1);
//     console.log(arg2);
//     console.log(arg3);
// }

// var person = {
//     name: 'naman',
//     age: 10,
//     add: 'delhi'
// }

// const bindedAsk = ask.bind(person, 1000, 5000);
// bindedAsk(2000);
// function abcd(){

// }

// function Person(name2){
//     // this.name = name2;
//     // console.log(this);
//     this.name = name2;
// }

// const person1 = new Person('naman');
// // const person2 = new Person('Dinesh');
// console.log(person1); //object -> with all properties of Person
// // console.log(person2) //object -> with all proeprties of Person 

// //in the above the values that we are passing will act as the value of the instance.

// /*  
//     1) it creates a empty object -> {}
//     2) it points the value of this to the empty object it created 
//     this = {}
//     3) if we are not returning anything from the constructor function or if we are not returning a object it automatically returns this keyword.
//     4) 
// */ 
// const person3 = new Person();
// console.log(person3);

// function sample(){
//     console.log(this.age);
//     const obj2 = {name: 'Neha', add: 'delhi'}
//     const obj3 = {name: 'abcd', add: 'delhi'}
//     sample2(this)

//     // sample2({name: 'Harsha', age: 25})
// }
// function sample2(that){
//     //this window -> undefiend
//     console.log(that.age);
// }
// const person = {
//     name: 'naman',
//     age: 10
// }
// // const abcd = 10;
// sample.call(person)


// function check(abcd){
//     console.log(abcd);
//     //lines fo code

//     console.log(abcd);
// }

// check(10)
// console.log(this);

// function sampleFunc(){
//     console.log(this);
// }

// function Animal(species, name, legs, wings){
//     this.staticVal = 200;
//     this.species = species;
//     this.name = name;
//     this.legs = legs;
//     this.hasWings = wings;
//     this.sampleFunc = function(){
//         console.log(this);
//     }
// }

// const cheetah = new Animal('a', 'cheetah', 4, false);
// const ostrich = new Animal('b', 'ostrich', 2, true);
// // console.log(cheetah);
// // console.log(ostrich);

// cheetah.sampleFunc();
// sampleFunc.call(cheetah)

// function Outer(){
//     this.name = "outer";
//     this.innerFunction = function(){
//         console.log(this.name);
//     }
// }
// const outer1 = new Outer();
// const outer2 = new Outer();

// outer1.innerFunction();
// const innerFunction2 = outer2.innerFunction;
// innerFunction2();

// var length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length: 3,
//     method(callback){
//         callback()
//     }
// }
// object.method(callback, 1,2);

// function User(){
//     this.name = "abcd"
//     this.score= 200
//     this.sayUser = function(){
//         console.log(this.name);
//         function innerFunc(){
//             console.log(this.name);
//         }
//         innerFunc();
//     }

// }
// let name = new User();
// name.sayUser();

// function User(){
//     this.name = "abcd"
//     this.score= 200
//     this.sayUser = function(){
//         console.log(this.name);
//         const self = this
//         function innerFunc(){
//             console.log(self.name);
//         }
//         innerFunc();
//     }

// }
// let person = new User();
// person.sayUser();

// const personObj = {
//     age: 10
// }

// const arrowFunc2 = () => {
//     console.log(this)
// }

// function normalFunc() {
//     console.log(this)
    
//     arrowFunc2();
// }
// // arrowFunc();
// normalFunc.call(personObj);

// function normalFunc(){
//     console.log(this);
    
//     const arrowFunc2 = () => {
//         console.log(this)
//     }
//     arrowFunc2();
// }

// normalFunc();


// function normalFunc(){
//     console.log(this);
    
//     const arrowFunc2 = () => {
//         console.log(this)
//     }
//     return arrowFunc2;
// }

// normalFunc()();

// const person = {
//     age: '10',
//     add: 'delhi'
// }

// const arrowFunc2= () => {
//     console.log(this);
// }

// arrowFunc2.call(person);

// const constructorArrowFunction = (name, age) => {
//     this.name = name
//     this.age = age
// }

// const person1 = new constructorArrowFunction('naman', 10)



// function Pet(name){
//     this.name = name;
//     this.getName =() => this.name;
   
// }
// const cat = new Pet('dumbo');

// console.log(cat.getName());

// const {getName} = cat;
// console.log(getName())


// const obj = {
//     simple: 'sample',
    
//     welcome(){
//         return 'I am welcome', this.simple
//     },

//     notWelcome: () => {
//         return 'Not welcome', this.simple
//     }
// }

// console.log(obj.welcome());
// console.log(obj.notWelcome());

// const obj2 = {
//     name: 'naman'
// }

// function abcd() {
//     const abcd2 = () => {
//         const abcd3 = () => {
//             const abcd4 = () => {
//                 console.log(this);
//             }
//             abcd4()
//         }
//         abcd3()
//     }
//     abcd2()
// }
// abcd.call(obj2);

