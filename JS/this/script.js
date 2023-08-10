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
var person3 = {
    name: 'something'
}

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


function abcd(cb){
    const returned = cb();
    returned();
}

var person = {
    ask(){
        console.log(this);
        return this.ask2
    },
    name: 'naman',
    age: 10,
    ask2: function(){
        console.log(this);
    },
}
const check = person.ask;
abcd(check);