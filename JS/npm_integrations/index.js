import { specialSort, specialSort2 } from "./common.js";
import abcd from "./common.js";
import axios from 'axios';

specialSort();
specialSort2();
// console.log(abcd);
abcd.iAmDefault();
abcd.iAmAnotherDefaultFunction();

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then((data)=>{
    console.log(data.data)
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data)=>{
    // console.log(data.data)
    return data.json()
})
.then((data)=>{
    console.log(data)
})

