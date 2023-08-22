// function User(name, age){
//     this.name = name;
//     this.age = age;
// }

// const u1 = new User('naman', 10);
// const u2 = new User('abcd', 20);

// console.log(u1.name);
// console.log(u1.age);
// console.log(u2.name);
// console.log(u2.age);

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

const commonPlace = {
    getName : function(){
        this.name;
    },
    increase: function(){
        this.score++
    }
}

function User(name, age, score){
    const newObject = Object.create(commonPlace);
    newObject.name = name;
    newObject.age = age;
    newObject.score = 0;
    // newObject.getName = function(){
    //     return newObject.name
    // }
    // newObject.increase = function(){
    //     newObject.score++;
    // }
    return newObject;
}
const u1 = User('naman', 10, 0);
const u2 = User('abcd', 20, 10);

console.log(u1.name);
console.log(u1.age);
console.log(u2.name);
console.log(u2.age);
u1.increase();
console.log(u1.score);
u1.increase()
console.log(u1.score);
u2.increase();
console.log(u2.score);


// const user1 = {
//     name: 'naman',
//     age: 10,
//     add: 'delhi'
// }
// const user2 = {
//     name: 'abcd',
//     age: 20,
//     add: 'maharashtra'
// }



// const obj = {};
// const obj2 = Object.create({})

// u1.__proto__.something = 'some'
u2.__proto__ = {};