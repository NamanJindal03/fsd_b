//Imagine we are getting this code from some external codebase
// var func = 10;
var func = (num, num2) => {
  return num + num2;
};

/* 

    Assumption is that, our whole system is running
    on a single server.


*/

/* 
    MCQ
    which is a valid try catch syntax

    1) try{
        console.log('good is working')
    }
    2) try {
        console.log('good is working')
        throw new Error('error thrown')
    }
    catch(err){
        console.log(err.message)
    }

    3) try{
        console.log('something')
    }
    catch(){
        console.log('error printed')
    }

    4) try {
        console.log('abcd')
    }
    catch(){
        catch(err){
            console.log('error')
        }
    }

*/

function com(arr2, obj, numb) {
  arr2.push(22); //[10, 20, 30, 22]

  //   arr.pusharr.pop
  arr = [30, 40, 50]; //

  obj.age = 50;

  obj.range = 20;

  numb = 90;

  //   console.log(arr);

  return arr;
}

const arr = [10, 20, 30]; //[30, 40, 50] =>

const obj = { name: "neha", age: 10 }; //{age: 50, range: 20}

const numb = 50;

com(arr, obj, numb);

console.log(arr);

console.log(obj);

console.log(numb);

const a = 10;
a = 10; //error?

/* 

1) who will be calling the callback function??




*/









// const newnewObj = {
//     name: 'naman',
//     age: 10
// }

// newnewObj.age = 20;
// console.log(newnewObj);










// function customEvery(arr, cb) {
//   for (var i = 0; i < arr.length; i++) {
//     if (!cb(arr[i])) {
//       return false;
//     }
//   }

//   return true;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// const arr = [2, 4, 6];

// const returned = customEvery(arr, isOdd);

// console.log(returned);
