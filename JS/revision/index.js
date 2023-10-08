
// const obj = {name: 'naman', age: 10};

// function sample(){
//     console.log(this)
// }
// //call -> 
// //bind?

// // sample() //this -> window
// const objBindedSample = sample.bind(obj, 'abcd');
// objBindedSample();
// sample();

let dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 3,
    favoriteActivity: "fetch",
    customFuncAddition: introduceDog
};

function introduceDog() {
    console.log(`Meet ${this.name}!`);
    console.log(`Breed: ${this.breed}`);
    console.log(`Age: ${this.age}`);
    console.log(`Favorite Activity: ${this.favoriteActivity}`);
}

Function.prototype.myBind = function (obj = {}, ...args) {
    // Write your code here

    //what exactly call does for you? -> implement that on your own

    // const storeVal = this;
    obj.customFuncAddition = this;
    return function(){
        //this.call(obj)

        // storeVal.call(obj);
        obj.customFuncAddition()
    }
}

const introduceBuddy = introduceDog.myBind(dog);
introduceBuddy() //

const obj = {
    name: 'naman',
    age: 10,
    customFunc: function(){
        console.log(this)
    }
}

obj.customFunc();