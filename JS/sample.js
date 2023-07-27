// var myFirstVariable = 'abcd';
// console.log(myFirstVariable); //logging

// myFirstVariable = 10; //reinitialize
// console.log(myFirstVariable);

// myFirstVariable = [];
// console.log(myFirstVariable);

// myFirstVariable = {};
// console.log(myFirstVariable);

// myFirstVariable = true;
// console.log(myFirstVariable);

// var myFirstVariable = 'now I have changed';
// console.log(myFirstVariable);

/* 
    before print demo
*/

// console.log(myVariable)

// var mySecondVar = 10;
// console.log(mySecondVar);

// var myNum = 10;
// console.log(typeof (myNum));

// var myStr = 'str';
// console.log(typeof (myStr));

// var myBoolean = true;
// console.log(typeof (myBoolean));

// var arr = [];
// console.log(typeof (arr));

// var obj = {};
// console.log(typeof (obj));

// var constStr = new String('str2');
// console.log('this is my string', constStr);
// console.log(typeof (constStr));

// var constNum = new Number(10);
// console.log('this is my number', constNum);
// console.log(typeof (constNum));

// var dt = new Date();
// console.log(typeof dt)

// var a = 10;
// // a++;//1
// // a++;//2
// // console.log(a); //2

// if(a){ //js treat this as a true
//     console.log('I am inside if')
// }

// if(a != 10){

// }

// var zerro = null;

// if(zerro){
//     console.log('aww i got executed')
// }
// else{
//     console.log('not executed')
// }

// var a = 0;

// if(a === 0){ //js comes it sees that we have a true block -> false => a === 0 => true
//     console.log('inside if')
// }

// var a = 0;
// var b = '0';

// if(parseInt(b) === a) {
//     console.log('executed');
// }
// else if(b == a) {
//     console.log('now I am definetely executed');
// }

// var arr = [];
// var obj = {};

// var arr = new Array();
// var obj = new Object();

/* 
    10, 20, 40
*/
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.pop();
// arr.push(40);
// console.log(arr);

// var falsy = '10';
// var truthy = 0;

// var ans = falsy ?
//             ((truthy || -10) ? 10 : 4)
//             : 2;
// console.log(ans);

// var ans;
// var abcd = 10;
// var arr = [];
// if(ans && abcd){
//     console.log('in if')
// }
// else if(ans){
//     console.log('in else if')
// }
// else{
//     console.log('in else') //in else
// }

// if((ans && abcd) || arr) {
//     console.log('in if')
// }
// else{
//     console.log('in else')
// }

// function myFunc(myNum, myNum2, myNum3){
//     console.log(myNum);
//     console.log(myNum2);
//     console.log(myNum3);
//     return 10;
// }

// var myNum = 10;
// var a = myFunc(100);
// console.log(a);

// //function expression
// var myFuncVariable = function mySomething(){
//     console.log('inside function expression')
// }
// // myFuncVariable()
// // mySomething()
// console.log(myFunc);

// var variable1 = 10;
// console.log(variable1);

// function myFunc (){
//     console.log('my func called');
// }

// var myFuncStore = myFunc();
// console.log(myFuncStore);

// var a = 10;
// var b = 30;
// function myFunc(n, newb) {
//     console.log(newa); //10
//     console.log(newb); //30
// }

// myFunc(a, b)

// console.log(a)
// var a = 10;
// function temp(){
//     var b = 40;
//     return b;
// }
// var funcValue = temp();
// console.log(temp)
//in java this will throw me an error and it will say temp not declara

// var a = 100;

// var functionVariable = function temp(a){
//     console.log(a); //undefined
//     console.log('inside temp'); //
// }
// functionVariable(a);

// var numb1 = 100;
// console.log(addition(numb1, numb2));

// var numb2 = 'add';
// function addition(a,b){
//     console.log(a+200)
//     return a + b;
// }

//what value will be printed in the console

// function tempCall() {
//     return 300;
// }
// var store = tempCall();

//GLOBAL SCOPE
// var gl = 100;

// function inner1(){
//     console.log(gl);
//     var inn1 = 200;
//     console.log(inn1);
//     function inner2(){
//         console.log(gl);
//         console.log(inn1);
//         var inn2 = 300;
//         console.log(inn2);
//     }
//     inner2();
//     //console.log(inn2)
// }
// inner1();
// console.log(gl);
// console.log(inn1);
// console.log(inn2);

// function abcd(){
//     var a = 10;
//     console.log(a)
// }
// abcd();
// console.log(a);

// var a = 100;
// function ran1(){
//     a = 200;
//     console.log(a)
// }

// function ran2(){
//     a = 100;
//     console.log(a)

//     function ran3(){
//         console.log(a);
//     }
//     ran3()
// }
// ran1();
// ran2();

//

// //Question 2
// function sample(){
//     console.log(x);
//     var x = 500;
// }
// sample();

// //Question 1
// console.log(y);
// var y = 200;

// var x = 200;
// console.log(x) //200
// function exec1(){
//     if(x > 10){
//         var x = 50;
//     }
//     console.log(x)
// }
// exec1();
// console.log(x)

// var x = 200;
// function exec1(){
//     if(x > 10){
//         x = 50;
//     }
//     console.log(x) //
// }
// exec1();
// console.log(x) //

// var y = 200;
// function exec1(){

//     if(y > 10){
//        var x = 50;
//     }
//     console.log(x) //
// }
// exec1();
// console.log(x) //

// var y = 200;
// function exec1(){
//     var y;
//     if(y > 10){
//        var x = 50;
//     }
//     y = 100;
//     console.log(x) //?undefined
//     console.log(y) //?100
// }
// exec1();
// console.log(x) //?error
// console.log(y) //?200

/* 
    object is a key value pair ->
    key is also sometimes referred to as properties
*/
// var obj = {}; // {} => object literal
// var obj2 = new Object();

// var obj3 = {
//     name: 'naman',
//     age: 4,
//     gender: 'male'
// }
// console.log(obj3);

// /* Accessing the values of the object */
// /*
// dot notation
// */
// console.log(obj3.name) //naman
// console.log(obj3.gender) //male

// /*
//     square bracket notation
// */
// console.log(obj3['age']) //4
// console.log(obj3['gender']) //male
// console.log(obj3['name']) //naman

// /* Giving the object new values */
// obj3.location = 'delhi';
// console.log(obj3);

// obj3['school'] = 'rdps';
// console.log(obj3);

// /*
// {
//     "name": "naman",
//     "age": 4,
//     "gender": "male",
//     "location": "delhi",
//     "school": "rdps"
// }
// */
// /* changing the value of an existing key */
// obj3.location = 'new delhi';
// console.log(obj3);

// obj3['school'] = 'bal bharti';
// console.log(obj3);

// /*  */
// var arr =[];
// arr.length

// var str = 'this is my first format of string'; //single quotes
// var str = "this is my first format of string"; //double quotes
// var str = `this is my first format of string`; //tilde quotes -> below ESC ~

// var str = "this is my 'first' format of string"; //double quotes
// // var str = "this is my "first" format of string"; //error

// var str = 'this is my "first" format of string'; //single quotes, double quotes inside
// /*
//     If I am dealing with single quotes and double quotes, If I ened to contcatenate the variables,
//     I need to quit the quote whereas in the case of tilde this is not needed
// */

// var abcd = 10;
// var name = 'naman';
// var age = 12;
// var strSingle = 'this is my first number' + abcd;
// var strDouble = "this is my first number" + abcd;
// var strTilde = `this is my first number ${abcd}`;

// var strTildeComplicated = `this is my tilde variable, I am ${name} and my age is ${age}`;

/* 
    whenever you are delaing with a lot of variables use ` -> 

*/

// function abcd(){
//     //normal funciton or function declaration
// }
/* 
    ${}
*/

// var out = 10;
// function outer(){
//     var ins = 200;
//     inner();
//     console.log(`this is my outer ${out}`);  //20
//     out = 200;
// }
// function inner(){
//     out = 20;
//     // console.log(`inside ${ins}`) //error
// }

// outer();

// let abcd = 10;
// console.log(`this is my outer ${abcd + 10+ 20+ 50}`);  //20

// 5 ->

// 5  6
/* 

    ~ => 6
    ^ =>
    | => 
    & =>
*/

/* 
    BODMAS -> Brackets Divisiion Multiplcation addition subtraction
*/

/* 
    receiveddd-> abcd func, logic 
*/

// function outer(){
//     abcd = 10;
//     console.log(abcd);
// }
// console.log(abcd);
// outer();

// function parent(){
//     var sample = 'sam';
//     hoisted()
//     function hoisted(){
//         return 'I am a function';
//     }
//     // var hoisted = "I am a variable";
//     var hoisted = hoisted()
//     return hoisted();
// }

// console.log(parent()); //

// function parent(){
//     var sample = 'sam';
//     function hoisted(){
//         return 'I am a function';
//     }
//     var hoisted = "I am a variable";
//     var hoisted = function sample(){
//         console.log('sample func');
//         return 'I am another function';
//     }

//     console.log(hoisted()) //

//     return hoisted();
// }

// console.log(parent()); //
/* 
console -> 
*/

// function parentCheck(){
//     var check = function check2(){
//         console.log('check 2')
//     };
//     var functionReturn = check();
//     return functionReturn;
// }

// parentCheck();

/* 
    Backend -> node (express)

    Frontend -> Desktop -> Electron -> JS framework -> POSTMAN -> 
                Desktop Browser -> HTML CSS JS, React, angular, vue, svelte
                Mobile  -> React native  -> andrpid and ios


    JAVA -> 
        MOBILE -> KOTLIN, JAVA -> android development ->
        JAVA Backend -> spring boot 
        Java -> DSA 
*/
// function parent10(){
//     var sample = 'sam';
//     function hoisted(){
//         return 'I am a function';
//     }
//     var hoisted = "I am a variable";
//     var hoisted = hoisted()
//     console.log(hoisted)
//     //return hoisted();
// }
// parent10()

// function parent(){
//     var sample = 'sam';
//     var hoisted = "I am a variable";
//     function hoisted(){
//         return 'I am a function';
//     }
//     //var hoisted = hoisted()
//     return hoisted();
// }

// console.log(parent()); //

// var var1 = 10;
// test1();
// test2();
// function test1(){
//     console.log(var1);//
//     var1 = 20;
// }
// function test2(){
//     console.log(var1);//
// }

// var var1 = 20;
// var var2 = 50;
// function test1(){
//     console.log(var1);//
//     var2 = test2();
//     console.log(var2);//
//     console.log(var1);//

// }
// function test2(){
//     var1 = 30;
// }
// test1();

// var var1 = 20;
// function test1(){
//     var var2 = 200;
//     console.log(var1);//
//     var1 = test2();
//     console.log(var1);//

//     function test2(){
//         var1 = 30;
//         return var1;
//     }

// }

// test1();

// (function normalFunc(){
//     console.log('abcd');
// })();

// (function normalFunc3(var2){
//     console.log(var2);
// })(50);

// var funcExpression = function normalFunc3(var2){
//     console.log(var2)
// }
// funcExpression(20);

// function normalFunc4(var1){
//     console.log(var1);
// }
// normalFunc4(10);

// normalFunc();
// normalFunc(); //calling // invoking

// var functionExpression = function abcd(){
//     console.log('abcd');
// }

// var funcitonExpression2 = function(){
//     console.log('abcd2');
// }
// funcitonExpression2();

//differenfcec between callling a function and referencing a function

//1st applciaition
// function mainFunc(cb, cb2){
//     var test = 10;
//     console.log(cb(test));
//     // console.log(cb2);//TODO: need output for this
// }
//callback

/* function call vs function refence */

// function passingFunc(num){
//     console.log(num);
// }
// function mainFunc2(){
//     console.log('main')
// }
// var mainFunc3 = function mainFunc3(){
//     console.log('main func 3')
// }

// mainFunc(passingFunc, mainFunc3, mainFunc2);

// console.log(passingFunc());//

// function mainFuncTest(numb){
//     console.log(numb);
// }
// var testVar = 10;
// mainFuncTest(testVar)

// var testFunc = function(){
//     console.log('random')
// }

// var testFunc3 = function(){
//     console.log('random')

// }

// var testFunc4 = function(){
//     console.log('random')

// }

// var testFunc2 = function test(){
//     console.log('random')

// }

// console.log(testFunc2()) //
// console.log(testFunc()) //
// console.log(testFunc3()) //
// console.log(testFunc4()) //

// var x = 10;
// console.log(x); //10

// if(true){
//     var abcd = (function(){
//         var x = 20;
//         console.log(x); //20
//     })();
//     console.log(abcd)
// }
// console.log(x); //10

// var temp = function (){
//     console.log('first');
// }

// var temp2 = function(cb){
//     console.log('second');
//     return cb;
// }
// console.log(temp2(temp));

// function temp1(){
//     function temp2(){
//         console.log("first")
//     }
//     return temp2;
// }

// var abcd = temp1();
// console.log(abcd);

// var x = 200;
// function sum(){
//     var x = 10;
//     x++;
//     return x;
// }

// function temp1(){
//     return sum();
// }

// var abcd = temp1();
// var abcd2 = temp1();
// console.log(abcd);
// console.log(abcd2);

// var x = 200;
// function sum(){
//     x++;
//     return x;
// }

// function temp1(cb){
//     return cb();
// }

// var abcd = temp1(sum);
// var abcd2 = temp1(sum);
// console.log(abcd);
// console.log(abcd2);

// var myVar = "foo";
// (function(){
//     console.log(`my foo is ${myVar}`);
//     var myVar = "bar";
//     console.log(`my foo is ${myVar}`);
// })()

// var funcExpression = function (num){
//     console.log('I am normal');
//     console.log(num)
// }

// var firstArrowFuncForm = () =>{
//     console.log('i am first arrow')
// }

// var seconfArrowFuncForm = num => {
//     console.log(num);
// }

// var thirdArrowFuncForm = num => console.log(num);

// var fourthArrowFuncForm = (num, numb2) => console.log(num + numb2);

// fourthArrowFuncForm(100, 200);//
// thirdArrowFuncForm(1000);//
// thirdArrowFuncForm(20);//
// thirdArrowFuncForm(30);//

// if(true) console.log('first');
// if(true) {
//     console.log('first')
// }

// var funcAr = num => {
//     console.log(num)
// }
// funcAr(100, 200, 3000);

/* 
    syntatic sugar
*/

// function higherOrderFunction(cb){
//     console.log('I am higher');
//     console.log(cb); //10
// }

// function firstClassFunc(){
//     console.log('i am first')
// }

// var IAmTheFunctionStoreVariable = function(){
//     console.log('i am first')
// }

// higherOrderFunction(firstClassFunc);

// higherOrderFunction(function (){
//     console.log('i am first');
// })

// var numb = 10;
// higherOrderFunction(numb) //
// higherOrderFunction(10) //

// function isEvenNumber(numb){
//     if(numb %2 === 0){
//         return true;
//     }
//     return false;
// }

// isEvenNumber(10)

// //step1
// function isEvenNumber(numb){
//     return numb%2 === 0;
// }

// //step 2
// var isEvenNumber = (numb) => {
//     return numb %2 === 0;
// }

// //step 3
// var isEvenNumber = numb => {
//     return numb %2 === 0;
// }

//step 4
// var isEvenNumber = numb => numb%2 ===0;

// var isEvenNumber = numb => 100;  //there is a auto return applied
/* 
    In the above syntax I cannot use a return keyword 
    When we have a single line syntax, it automaticalls adds a return to it
*/

// var returnValueOfTheFunc = isEvenNumber(99);
// console.log(returnValueOfTheFunc)

// var funcDemo = num =>{
//     return 'hello'
// }

// funcDemo(10);

// var x = 200;
// function exec1(){
// //x : undeifned
//     if(x > 10){
//          var x = 50; //it won't go inside
//     }
//     console.log(x);//undefined
// }
// exec1();
// console.log(x);//200

//memory -> x => undefined

// function A(){
//     console.log('called A');
//     return false;
// }
// function B(){
//     console.log('called B');
//     return false;
// }

// function C(){
//     console.log('called C');
//     return true;
// }
// console.log( A() && (C() || B()));

//var variable_2;
// var variable = 10;
// (()=>{
//     variable_3 = 35;
//     console.log(variable_3);
//     var variable_3 = 45;
//     variable_2 = 15; //var
//     console.log(variable);

// })();
// console.log(variable_2);
// console.log(variable_3);
// var variable = 30;

/* 
    (()=>{

    })()
    (function(){
        clg
    })()

*/

// var isEvenNumber = numb => numb%2 ===0;

// var isEvenNumber = numb => console.log('abcd');  //there is a auto return applied

// console.log(isEvenNumber());

// console.log(console.log('abcd'));
// console.log(100+200);

// var abcd = undefined || 400;
// console.log(abcd);

// var temp2 = 400 && (800 || 1000);
// console.log(temp2);

// var temp3 = 500 || undefined;
// console.log(temp3);

// var temp4 = '' || 1000;
// console.log(temp4);

/* 
    Ruleboox && and ||
    in || 
        if first is true then return from there itself
        if first is false it checks second

    in &&
        if first is true then it checks the second as well
        if first is false it doesnt need to check the second as there is no need 

*/

// function A(){
//     console.log('called A');
//     return false;
// }
// function B(){
//     console.log('called B');
//     return false;
// }

// function C(){
//     console.log('called C');
//     return true;
// }
// console.log( C() && (A() || B()));

// function sample(){
//     return 'retu';
//     console.log('I wanna execute'); //dead code
//     console.log('execcute me please');//dead code
// }

// var returnVal = sample();
// console.log(returnVal);

// function hof(cb, cb2) {
//     cb();
//     cb2();//terminates
//     console.log('abcd');
//     console.log('def');
// }

// hof(()=>{
//     console.log('first');
// }, 10);

// var funcStore = 10;
// funcStore();

// function testHof (cb){
//     cb();
// }
// var funcFirstClass = () =>{
//     console.log('first class')
// }
// testHof(funcFirstClass);

// testHof(()=>{
//     console.log('first class')
// }, 10)

/*
    try catch -> intro

*/

// function hof2(cb, numb){
//     //this hof2 can only take number greater than 100 as the second argument
//     try{
//         if(numb <= 100){
//             throw new Error('Hof2 can only take numbers greater than 100');
//         }
//         cb();
//         if(true){
//             throw new Error('you made mistake');
//         }

//     }
//     catch( error){
//         console.log(`hof2 cb error: ${error.message}`);
//     }
//     console.log('first');
//     console.log('second');
// }

// hof2(func, 50);

// }
// catch(){

// }

// var abcd = () => "hello"

// var y = 200;//parent
// function exec1(){
//     /*
//         memory x: 50
//     */
//    /*

//     y is taken from heirarchial lexical order
//    */
//     if(y > 10){ //200 > 10
//         var x = 50;//executed
//     }
//     console.log(x); //50
// }
// exec1();
// console.log(x);//error

// function hof2(sumCb, numb){
//     //this hof2 can only take number greater than 100 as the second argument
//     try{
//         if(numb <= 100){
//             throw new ReferenceError('Hof2 can only take numbers greater than 100');
//         }
//         var sum1 = sumCb(20, 30);
//         var furtherSum = sumCb(sum1, 100)
//         if(true){
//             throw new Error('you made mistake');
//         }

//         // if(client.userType !== 'customer'){
//         //     throw new Error('Something went wrong, our system is facing technical difficulties')
//         // }
//         // orderPlaced();
//     }
//     catch( error){
//         console.log(`hof2 cb error: ${error}`);
//     }
//     console.log('first');
//     console.log('second');
// }

// hof2(func, 50);

// try{
//     console.log('i am trying')
// }
// catch(eee){
//     console.log('theiuhfei')
// }

//part 1
// function abcd(){
//     try{
//         plo = 10;
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// abcd();
// try{
// console.log(plo);
// }
// catch(err){
// console.log(err);
// }

//2 part
// function abcd2(){
//     plo2 = 10;
// }
// abcd2();
// console.log(plo2); //10

var squreOfANumber = 10;

//millions of line of code

var squreOfANumber = 20; //very diifficult error tracking
//the above gives no error ->

// let
// const

/* 
    let is more strict than var
    const is more strict than let 
*/
// let abcd;
// let letVariable = 200;

/* 
    we cannot reclare like let 
    you cannot even reinitialise a const based variable
    you cannot have a empty declaration of a const based variable -> declare and initialize //
*/
// const con; //you cannot leave a const variable empty
// const con2 = 10;
// const con3 = 'ewfnejfe'
// const con4 = false;

// function checkCheck(){
//     var abcd = 10;
//     console.log(abcd);
// }

// {

// }

// if(){

// }
//let and const are block scoped whereas var is function scoped

// function test(){
//     {
//         let letVariable = 10;
//         const constVariable = 30;
//     }
//         var ab = 20; //
//         console.log(letVariable); //error
//         console.log(constVariable);
//     console.log(ab);
//     console.log(letVariable); //error
//     console.log(constVariable);

// }
// test();
// console.log(ab);
// console.log(letVariable); //error
// console.log(constVariable);

// var abcd2 = 10; //different
// function test1(){
//     var abcd2 = 30; //differnent
//     console.log(abcd2);
//     let variable1 = 10;
//     {
//         let variable1 = 40;
//         var var2 = 30;
//         const abcd = 20;
//         console.log(variable1);//40
//     }
//     console.log(variable1);//10
//     console.log(var2);//30
//     console.log(abcd);//error
// }
// console.log(abcd2) //10
// test1();

// var abcd2 = 10;

// function test(){
//     // let abcd2 = 10;
//     var abcd2 = 10;
//     console.log(abcd2);//
//     {
//         var abcd2 = 40;
//         console.log(abcd2);//
//     }
//     {
//         let abcd2 = 50;
//         console.log(abcd2);//
//     }
//     {
//         abcd2 = 500;
//         console.log(abcd2);//
//     }
//     {
//         let abcd2 = 100;
//         console.log(abcd2);//
//     }
//     let abcd3 = 20;
//     console.log(abcd2);//
// }
// test();

/* 
we cannot have 2 same variable if one of them is let or const declaration in same scope
*/

// for(var i= 0; i<10; i++){
//     console.log(i);
// }

// var arr = [10, 20,
//             [10, 20, 30, [40], [50, 60]]
//         ];

// var decArr2 = [{'naman': 10}, ['abcd', 10, false], [{one: 10}], 1, 2 ,3, 4]

/* arr.length */
// for(var i= 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//for of -> to iterate over a array
//for in

// for()

// for(var numb of arr){
//     console.log(numb); //
//     if(Array.isArray(numb)){ //false -> index 0, index1
//         for(var numb2 of numb){
//             console.log(numb2)
//         }
//     }
// }

// const aFunction = () => {
//     console.log(var1); //200
// }

// let var1 = 200;

// aFunction();
// if(true){
//     let var1 = 201;
//     console.log(var1); //201
// }
// if(var1%2 === 0){
//     console.log(var1); //200
// }

// let a = 10;
// let a = 10;

//a = undefined -> hoisting??? memory allocation phase

// console.log(a); //undefined???
// var a = 100;

//the phenomenon in which it seems like that javacript has brought the variable declaration at the top of the
//SCOPE is referred to as hoisting.
/* 


*/

// console.log(a); //error -> you cannot access a before the initialization

/* 
    if the above gives me this error, the how is hoisting happening over here?
*/
// const a = 100;

// function tempExplain(){
//     // console.log(a);
//     {
//         console.log(a);
//         let a = 100;
//     }
// }

// function tempExplain(){
//     console.log(a);//undefined
//     // console.log(a); //100
//     // var a = 100;
//     {
//         console.log(a); //100
//         var a = 100;
//     }
// }
// tempExplain();

// function tempExplain(){
//     let a = 10;
//     {
//         console.log(a); //error -> not initlized -> terminated, undefined
//         a = 100;
//     }
//     console.log(a); //10
// }
// tempExplain();

// function tempExplain(){
//     let a = 10;
//     {
//         let a = 300;
//         console.log(a);//300
//     }
//     {
//         console.log(a); //10
//         a = 100;
//     }

//     console.log(a);//100
// }
// tempExplain();

// let a = 10;
// function test1(){
//     //hositin will happen for a -> TDZ

//     /*
//         undefined > 5
//     */
//     if(a > 5){ //error
//         console.log(a); //no reach
//     }
//     var a = 200;
// }
// test1();

/* 
    shadowing
*/

//illegal shadowing -> why illegal? because let and const doesnt allow same variable decaltation in the same scope
// let a = 10;
// {
//     var a = 20; //error
// }

// //legal shadowing

// var b = 20;
// {
//     let b = 200; //no error
// }

// var c = 100;
// {
//     var c = 200; //no error
// }

// let d = 200;
// {
//     let d = 300;//no error
// }

// var e = 200;
// function random() {
//     var e = 300;
// }

// var f = 200;
// function random() {
//     let f = 300;
// }

// function abcd(){
//     // let b;
//     let a = b = 40; //confusing ->
//     console.log(a); //40
//     console.log(b); //40
// }
// abcd();
// console.log(b); //40
// console.log(a); //error

// {
//     let a;
//     console.log(a);
// }
// console.log(a);

// let abcd = 10

// let arr = [100, 'string', 'boolean', false, true,
//             [10, 20, 30, 40, ['str', abcd]]
//         ]

// console.log(arr[5][4][1]);

// for(let randomVariableName of arr){
//     console.log(randomVariableName);
// }

// let arr2 = [10,20, 30, 40
//             [20, 30, 40],
//             [10, 20, 30]
//             ]

// let a = function(){
//     console.log('f')
// }
// /* anonymous function express */

// let a = function named(){
//     console.log('eg')
// }
// /* names function expression
//  */

// var arr = [190, 500, 600];//
// arr.length = 1;
// arr.push(400); //adding in the end of the array
// arr.push(20);
// arr.pop(); //removing from the end of the array
// arr.push(50);

//[190, 50]
// console.log(arr);
// console.log(arr.length)

// arr.shift(); //removing from the start of the array
// console.log(arr);

// arr.unshift(9000); //adding in the start of the array
// console.log(arr);

/* 
    map
    reduce
    filter
    every
    slice
    splice
*/

//pass by value and pass by reference ->

// const variable1 = 100;
// variable1 = 200; //I cannot reassign a const variable

// const arr = [10, 20, 30, 40];
// arr = [1200];
// arr.push(50);
// console.log(arr); //able to update the array as well as no error

/* ]
    although I was using a const still I was able to update the array. why??
    the same thing happended in the case of object as well that even though I was using cosnt I could update it.

    why???
*/

// const arr = [10, 20, 30, 40];
// arr.push(500); //wont throw an error
// // arr = [10, 20, 30, 40]; //will this throw me an error?
// const defg = arr;

// const obj = {name: 'naman', age: 10};
// obj = {} //error

// const arr = [10,20];
// arr = []; //error

// obj.gender = 'male';
// obj = {};
// console.log(obj);

// function sample(arr){
//     arr.push(10);
// }
// const arr = [20, 40];
// sample(arr);

// console.log(arr); //output?

// function sample2(numb){
//     numb = 40;
// }

// const numb = 100;
// sample2(numb);
// console.log(numb); //

// function complexCode (arr, obj, numb){ //whenever you declare a paramater in a funciton in js, that basicalls
//     //acts as var
//     arr = [30, 40, 50];
//     obj.age = 50;
//     obj.range = 20;
//     numb = 90;
//     return arr;
// }

// const arr = [10, 20, 30];
// const obj = {name: 'naman', age: 10};
// const numb = 50;
// complexCode(arr, obj, numb);

// console.log(arr);
// console.log(obj);
// console.log(numb);

// function nest1(arr){
//     arr = nest2(arr);
// }

// function nest2(arr){
//     arr.push(200);
//     arr.push({});
//     arr = [200];
//     return arr;
// }
// const arr = [50];
// nest1(arr);
// console.log(arr);//50 200 {}

// const check1 = 10;
// check1 = 10;
// console.log(check1);

// const arr1 = [10, 20, 30];
// const arr2 = arr1;
// arr2.push(40);
// console.log(arr1);
// console.log(arr2);

// const arr1 = [10, 20, 30];
// const arr3 = arr1;
// const arr2 = arr1;
// arr2 = arr3;

// arr2.push(40);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log((+'3') + (+'5'));

// console.log(+'3') //integer 3
// console.log('3') //string 3

// console.log(3 + 5); ///8

// const arr = [true, false, [1,3,4, function() {console.log('abcd')}], {name: 'naman', age: 10}];
// // console.log(arr[1]);
// // console.log(arr[2][2]);
// console.log(arr[2][3]);

// const abcd = [10, 20]; //&101
// let defg = abcd; //&101
// defg.push(100);
// console.log(defg); //[10, 20, 100]
// console.log(abcd);//[10, 20, 100]

// function sample(abcd, obj, numb){
//     //abcd, obj => references
//     //numb => pass by value
// }

// const a = [];
// const b = [];
// console.log(a === b); //false
// console.log(a == b); //false

// const a = [20];
// const b = [20];
// console.log(a[0] == b[0]); //true
// console.log(a[0] === b[0]); //true

// const c = [20];
// const d = [30];
// console.log(c[0] == d[0]); //false
// console.log(c[0] === d[0]); //false
// console.log(typeof c)
// console.log(typeof c === typeof d);

//'object' === 'object'

// typeof 10;
// typeof 'str';
// typeof true;

/* 
    All arrays in javacript are objects -> 
        all arrays in js are derived from an object -> 

            prototype -> 
*/

// const c = [20];
// const d = [30];
// const e = {name: 'naman'};
// console.log(Array.isArray(c)); //remember
// console.log(Array.isArray(e)); //remember

//string and array => split and join

// const str = 'javascript';
// console.log(str[6])

// const str = 'javascript';  //['j', 'a', 'v' ..........]
// const arrStr = str.split();
// console.log(arrStr);

// const str = 'ja va script';  //['j', 'a', 'v' ..........]
// const arrStr = str.split(' ');
// console.log(arrStr);

// const str = 'ja va scvripvt';  //['j', 'a', 'v' ..........]
// const arrStr = str.split('v');
// console.log(arrStr);
// arrStr.push(1);

// const str = "java, is a diffrenet, language, from javascript";
// const arrStr = str.split(",");
// console.log(arrStr);

// const str = "javascript "

// const str1 = "value "

// // console.log(str + str1) //yh add krna h one line m with split esi ho skta h kyaa sir
// //javascript value

// const concatenaedArray = (str.trim() + " " + str1.trim()).split(' ');
// console.log(concatenaedArray);

// const str =  "     rifjewiofjiefdjwe ewfnewfjeifew          ";
// console.log(str.length);
// console.log(str.trim().length); //very important and useful function

/* 
    Applicattions -> 
        form -> 
*/

// const str = "java, is a diffrenet, language, from javascript";
// const arrStr = str.split("#"); //str.split()
// console.log(arrStr);

/* 
    we basically converted a string into array

    the viceversa of it is join -> whre we convert the array into string
*/

// const normalArr = ['java', 'is a diffrenet' ,'language from javascript', ['a', 'b', 'c', [true, false]]];
// // const str = normalArr.join(); //, acts as the default value
// const str = normalArr.join(' ');
// console.log(str);

/* 
    split
    join
    pusuh
    pop
    length
    unshift
    shift
*/

/* 
    Spread Operator  -> ...
*/

// const arr = [10, 20, 30, 40];
// const arr2 = [100, 200, 300, 400, {name: 'naman', age: 10}];
// const arr3 = [800, [10, 20, 30], 300, true];
// const
// // const combined = []

// const arr3 = arr.join();
// const aa3 = arr2.join();

// console.log(arr3.split(","));

// const arr = [10, 20, 30];
// const arr2 = [100, 200, 300];
// const arr3 = arr.join(",") + "," + arr2.join(",");
// console.log(arr3);

// console.log(arr3.split(","));

// console.log(arr3);
// const combined = [...arr, ...arr2];
// const combined = [...arr, ...arr2, ...arr3];
// console.log(combined);
// const copyArr = [...arr];
// copyArr[0] = 200;
// console.log(copyArr);
// console.log(arr);

// Argument vs parameter ->

// function abcdc(num){

// }
// abcdc(10);

// function print(){

//     console.log("hi ,i am printed on console");

// }

//     print(); //exexuting the function
//     console.log(print);  //referencing the function -> it prints the function defination

//     function hof(cb){
//         console.log(cb);
//     }
//     hof(print)

//hof -> the funciton that can receive antoher function as parameter or they return a funciton 
// function div(a,b){

//     const value = a/b;
    
//     console.log(value);
    
//     }
// function add(a, b) {
//   const value = a + b;

//   return value;
// }

// function maths(operator, x, y) {
//   operator(x, y);
// }

// maths(div, 10, 20);

// console.log(maths(add(), 10, 20));

// function abcd(){
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     // console.log('some sgtring')
//     let abcd2 = 10;
//     var abcd3;
//     let a = 20;
//     var b = 400;
//     console.log(a);
//     console.log(b);
//     console.log(abcd3);
// }

// abcd();

// function sample(cb, numb){
//     console.log(cb);
//     console.log(numb);
// }

// function sampleChild(){
//     return 100;
// }

// sample(sampleChild(), 500);

//spread -> ...
//rest operator -> ...

// const arr1 = [10, 20, 30];
// const arr2 = [10, 20, 40];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// function restCheck(var1, ...val ){
    
//     // console.log(val[0]); //
//     // console.log(val[1]); //
//     // console.log(val[2]); //
//     // console.log(var1); //
//     // console.log(val[10])
// }
// // function check(var1, var2, var3){

// // }

// restCheck(1, 2, 3);

//destructing 

// const a = [10, 20, 30];
// const [i, j, k] = a;
// console.log(i)
// console.log(j)
// console.log(k)

// const [var1, var2, var3] = [100, 200, 300];

// const var4 = a[0];
// const var5 = a[1];
// const var6 = a[2];

// const [var7,var8,var9] = a;
// const func = (a) => {
//     return 4 + a;
// };
// const func = ((a) => {
//     return 4 + a;
// })();

// const obj = {name: 'naman'};

// const [fun, random] = [func(4), obj];

// console.log(fun);
// console.log(random);


// const arr2 = [{name: 'naman'}, {age: 10}, {gender: 'male', ply: true}];
// arr2[0];

// const a = 10;
// const b = 20;
// const c = 30;
// const obj = {name: 'naman'}

// const variableBasedArr = [a, b, c, obj['name']];
// console.log(variableBasedArr); //[10, 20, 30]

// function sample2(){
//     return 4;
// }

// function sample(){
//     return [sample2, 
//         (
//             ()=> 5
//         )()
//     ];
// }
// const returnCheck = sample();

// const [f1, f2] = 
// console.log(f1);
// console.log(f2);


// function abcd(){

// }
// const test2 = () => {
//     return 10;
// }
// const test3 = () => {
//     const a = 10;
//     const b = 20;
//     return a+b;
// }

// const test4 = () => 10;

// const test5 = abcd => abcd + 20; //if we are dealing with strictly one parameter

// const test6 = => 20; //error

// const test7 = abcd, abcd2 => abcd + abcd2;//error
 
// const weirdFuncDefination = abcd => abcd;
// const returnFunc = weirdFuncDefination(2);
// console.log(returnFunc);

// function sample2(){
//     return 4;
// }

// function sample(){
//     return [sample2, 
//         (
//             ()=> 5
//         )(),
//         () => 10,
//         abcd => abcd
//     ];
// }
// //[()=>{}, function abcd(){}, ]
// // const returnCheck = sample();
// const [a1, a2, a3, a4, a5] = sample();
// console.log(a1);
// console.log(a2);
// console.log(a3(10));
// console.log(a4(2));
// console.log(a5);

// const [a, b, c, d] = [10, 20];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const [i, j, ...check] = [10, 20, 30, 40, 50];
// console.log(i);
// console.log(j);
// console.log(check);//


// function sample(){
//     return [true, ()=>{}, 5];
// }
// const [...arr] = sample(); //spread operat
// console.log(arr[1]); //

//concat and reverse -> functions/methods in js

// const [a, b, ...restTest] = [10, 20, 30, 40 , 50];


// const arr = [10, 20, 30];
// const arr2 = [40, 50, 60];
// const arr4 = [100, 200, 300];
// const arr3 = arr.concat(arr2, arr4);
// //const arr3 = [...arr, arr2]; //spread operator
// console.log(arr3);

// const strArr = ['abcd', 'defg', 'plplplpl', 'ewhfuefewhf'];
// strArr.reverse();
// console.log(strArr);


// strArr.length//
/* 
    1) changes the orignal array
    2) doesnt chanfge the original array, returns you the changed thing

*/


// function abcd (a=10, b=20){

// }
// abcd(40, 50);

// function abcd (a, b, c,d ){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// abcd()


// const [a,b,c, d] = [10,20, 30]

/* 
    replace the values of two variables => 
    const a = 10;
    const b = 20;
    //write your own code
    const temp = a, 
    a = b, 
    b = temp

    console.log(a) //20
    cosnole.llog(b) //10

    //do the above thing with destructing (-----)

*/
// function swapElements (cb, numb, numb2){

// }
// swapElements(myArray, 0, 1);

// let a = 20;
// let b = 30;
// //I want the swap of them to happen using destructing concept 

// //restriction - you cannot have another variable defined : hint destrucitng

// [a,b] = [b,a]; //this is the smallest code to swap things in JS. 
// console.log(a, b);
// const arr2 = [200, 400];
// const [abcd, defg] = arr2;
// const abcd2 = arr2[0];
// const defg2 = arr2[1];

// abcd = 20;
// defg = 40;

// const arr = [10, 20, 30];

// const arr = [10, 20, 30, 40];
// // const slicedArr = arr.slice(1);

// // console.log(slicedArr);
// // console.log(arr);

// // console.log(arr.slice(3)); //
// // console.log(arr.slice(0)); //
// const something = arr.slice(0);

///side task
// console.log(something == arr); //

// console.log([] === []); //
// console.log([] == []); //

// console.log({} === {});
// console.log({} == {});

// const a = {};
// const b = a;
// console.log(a === b);


// const arr = [10, 20, 30, 40, 50, 60, 70 , 80];
// const slicedArr = arr.slice(1);

// console.log(slicedArr);
// console.log(arr);

// console.log(arr.slice(3)); //
// console.log(arr.slice(0)); //
// const something = arr.slice(0);

/* 
    slice(<starting index>, <ending index> (non inclusive))
*/
/* 
    In js whenever we are dealing with a range sort of sitation the ending index is always non inclusive
*/
// const arr = [10, 20, 30, 40, 50, 60, 70 , 80];
// const slicedArr = arr.slice(1, 4);
// console.log(slicedArr);

// const sliced2 = arr.slice(0, arr.length); //
// const sliced3 = arr.slice(2,2);
// const sliced4 = arr.slice(); //arr.slice(0);
// console.log(sliced2);
// console.log(sliced3);
// console.log(sliced4);

// console.log(arr.slice(-1));

// console.log(arr.slice(-3)); //1
// console.log(arr.slice(-3,-1)); //2
// console.log(arr.slice(-4, arr.length));//3
// console.log(arr.slice(-1, -4));//4

//splice -> //splice leads to change of original array -> 


// const arr = [10, 20, 30, 40, 50 , 60];
// arr.splice(2);
// console.log(arr);

// arr.splice(2, 4);
// console.log(arr)

// arr.splice(2,2);//
// console.log(arr);

// arr.splice(2, 1, 'changed');
// console.log(arr);

// arr.splice(2,2, 'changed1', 'changed2');
// console.log(arr);
// arr.splice(2,2, 'changed1');
// console.log(arr);

// arr.splice(arr.length-2, 'arr');
// console.log(arr);

// arr.splice(<starting_index>, <no_of_values>);

// const arr = [10, 20, 30, 40, 50 , 60];
// const deletedArr = arr.splice(4); //
// console.log(deletedArr);
// const deletedArr = arr.splice(2,2,'ch1', 'ch2');
// console.log(deletedArr);//
// console.log(arr);//

// const deletedArr = arr.splice(2, 1, 'check1', 'check2', 'check3', 'check4');
// const deletedArr = arr.splice(2, 0, 'check1', 'check2', 'check3');
// console.log(arr);
// console.log(deletedArr);

// const arr = [10, 20, 30, 40, 50 , 60];
// const deletedArr1 = arr.splice(2,2, 100, 200);
//[10, 20, 100, 200, 50, 60] //[30, 40]

// const deletedArr2 = arr.splice(1,1, 500);
// const deletedArr3 = arr.splice(3, 2, 10, 20, 30, 40);
// console.log(deletedArr3);
// console.log(arr);



/* 3 coding quesitons ->  */

/* 
    one -> rest -> 1 complete approach and 1 partial approach 
*/





/* 
    1) 
    2) 
    3) change in array, also get a new value return 

*/

// real world applications of higher order functions -> 
/* 
    every
    filter
    reduce
    map -> ***************

    and many more -> 

    browser -> addEventListener
*/
//

//indexOf //lastIndexOf

// const arr = ['a', 'b', 'c', 'd', 'a', 'a', 'a'];
// const indexx = arr.indexOf('a');
// console.log(indexx);

// const lastINdex = arr.lastIndexOf('a');
// console.log(lastINdex);



// function hof(numb, cb) {
//     for(let i=0; i<2; i++){
//         cb(numb+i);
//     }
// }

// hof(10, (numb)=>{
//     console.log('execute this', numb)
// })

// hof(20, (newVal) => {
//     console.log('new exec', newVal);
// })

//every -> returns  boolean value

// const isEven = (numb) => {
//     return !(numb%2);
// }

// const isOdd = (numb) => {
//     return (numb%2);
// }
// const arr = [2,4,6,9];

// const result = arr.every(cb);


// const result2 = [2,4,6,8].every(cb)
// console.log(result);


//two kinds of map in js -> map datastructure (we havent discussed) && set
//map is also a hof -> which kind of resembles a loop 

//map -> map always returns an array
// const arr = [2, 4, 6, 8];

// const result = arr.map((val)=>{
//     //map -> loop -> 
//     function addNumber10(){
//         return val + 20;
//     }
//     let newNum = addNumber10(val);
//     console.log(newNum);
// }) //arguments 

/* 
    React -> you wont be able to effectively code in React without map -> 
*/


// const arr = [2, 4];
// // const bol = 10;

// const cbFunc = (val, index, completeArr )=>{
//     // console.log(val + 2);
//     // return [val + index, index];
//     // console.log(completeArr);
//     return (function(){
//         return 10;
//     })
    
// }

// const result = arr.map(cbFunc) ;
// console.log(result[1]());//

// console.log(result); //2167 -> 

// const cb = (index, val) => {
//     if(!(val % 2)){
//         return index;
//     }
//     return val;
// }

// const result = [100, 150, 201, 400].map(cb);
// console.log(result)

// [[100, 150, 201, 400], [400]].map(cb);

// function cb(val , index){
//     console.log(val);
// }


//Filter -> it is called upon an array, it takes a callback, whatever values passes the criteria of the callback gets
//return in the form of an array | filter also returns you an array

// const arr = [2,5, 7, 100];

// const result = arr.filter((val)=>{
//     return ! (val == 7); 
// })
// console.log(result);

// const arr = [true, false,true, false];

// const result = arr.filter((val)=>{
//     return true; 
// })
// console.log(result);//

/* 
    Reduce  ->>> 
*/
// const arr = [1,2,3,4,5];

// const returned = arr.reduce((prev, current)=>{
//     console.log('prev ', prev);
//     console.log('current ', current);
//     return prev + current;
// },4) //callback, starting value
// console.log(returned);


// const arr = [1,2,3];

// const returned = arr.reduce(function(prev, curr){
//     return ((prev * curr) -prev)
// }, 100) //callback, starting value

// console.log(returned);


// const arr = [7, 11, 18];

// const returned = arr.reduce(function (p, c){
//     if(c > p){
//         return c;
//     }
//     return p
// }, 12);

// console.log(returned)//

// const arr = [7, 11, 18];

// const returned = arr.reduce(function (p, c){
//     // if(c > p){
//     //     return c;
//     // }
//     // return p
//     console.log(p, ' ', c);
// });

// console.log(returned)//

// const arr = [7, 11, 18];

// const returned = arr.reduce(function (p, c){
//     // if(c > p){
//     //     return c;
//     // }
//     // return p
//     return p+c;
// });

// console.log(returned)//


// const arr = [7, 11, 18];

// const returned = arr.reduce(function (p, c, index, completeArray){
//     // if(c > p){
//     //     return c;
//     // }
//     // return p
//     console.log(`${p}, ${c}, ${index}, ${completeArray}`);
// });

// console.log(returned)//

// const arr = [7, 11, 18];

// const returned = arr.reduce(function (p, c, index, completeArray){
//     // if(c > p){
//     //     return c;
//     // }
//     // return p
//     if(p){
//         return completeArray.length+ index;
//     }
//     else{
//         return !c;
//     }
// }, 20);

// console.log(returned) //

/* 
    Level 2 -> How can you make your own custom every, filter, map, reduce 
*/


/// prototype -> 
//code 1
// function customEvery(arr, cb){
//     //write logic over here such that it return whatever your JS inbuilt
//     // method every return
//     //PS: you cannot call every in here

//     // for(let i=0; i<arr.length; i++){
//     //     if(!cb(arr[i])){
//     //         return false;
//     //     }
//     // }
//     // return true;
// }

// function customEvery(arr, cb){
    
// }

// const arr = [2,4,6,9];
// const ans2 = customEvery(arr, (val)=>{
//     // return !(val%2);
//     return 2;
// });
// console.log(ans2);//

// //step 1 -> I need to call the callback -> 

// const ownArray = [true, false, true, true, true];
// function hof(cb, ownArray2){
//     for(let i=0; i<ownArray2.length; i++){
//         const newValue = cb(ownArray2[i]);
//         // if(newValue){
//         //     console.log('truthy');
//         //     count++;
//         // }
//         // if(!newValue){
//         //     console.log('falsy')
//         // }
//         if(!newValue){
//             return false;
//         }
//     }
//     return true;
//     //
//     // console.log(count); //5
//     // if(count === ownArray2.length) {
//     //     return true
//     // }
// }

// const answer = hof(()=>{
//     console.log(10);
// })
// const childFunc = (a) => {
//     return a;
// }
// const answer2 = hof(childFunc, ownArray);

// function hof2(numb){
    
// }
// const answer3 = hof2(10)



// const a = [{key: 'name', value: 'naman'}, {key:'age', value: 10}]; 

/* 
    {
        name: 'naman',
        age: 10
    }

    for of ->

    reduce -> 

    initial value -> {}

    map ->
    filter ->
    find ->
*/



















//code 2
// const ans1 = arr.every((val)=>{
//     // return !(val%2);
//     return 2;
// })
// console.log(ans1);//


// const reply = [2,4,6,8, 10, 20, 30].map((val, index)=>{
//     return !val;
// })
// console.log(reply)
//reply -> [12, 14, 16, 18];

/* 
    step 1 -> iterating over the array 
    step 2 -> call the cb and pass it arr value, index and the array
    step 3 -> push the returned value of the callback in an array
    step 4 -> once the loop is over return the newly generated array
*/
// const arr = [2,4,6,8, 10, 20, 30];

// const reply2 = customMap(arr, (val, index)=>{
//     return val + 10;
// } )

// function customMap(arr, cb ){
//     const tempInternalArray = [];
//     for(let i=0; i<arr.length; i++){
//         const returnCallbackValue = cb(arr[i], i);
//         tempInternalArray.push(returnCallbackValue);
//     }
//     return tempInternalArray;
// }
// console.log(reply2);


/* 
    Math.ceil 
    Math.floor
    Math.round 
    Math.abs -> absolute -> 
    Math.random -> 0 to 1 (NI)
    Math.sqrt()
    Math.pow
*/
// console.log(Math.ceil(3.2));
// console.log(Math.ceil(3.002));//
// console.log(Math.floor(3.002));
// console.log(Math.floor(3.999999));//

// console.log(Math.abs(-40));
// console.log(Math.abs(40));//

// console.log(Math.random());

/* 
    1) It generates a value between 0 to 1(non inclusive) ->
    0 to 0.9999999999........

    we need a random integer number between a certain range 

    min = 10, max 90 -> 

    0 - 1
    10 - 90

    Math.random(max)*90 ->

    0*90 => 0 
    1*90 => 90

*/
// console.log(Math.floor((Math.random()*(90-10)) + 10 + 1));

// const max = 90;
// const min = 10;
// Math.floor((Math.random()* (max-min)) + min + 1);//

// console.log(Math.sqrt(7));
// console.log(Math.pow(3, 2));

/* 
    Objects -> 

    a for loop that we covered in array -> ????

*/

// const obj = {name: 'naman', age: 10};
// for(let a of obj){
//     console.log(a);
// }
// for in








// Dynamic Objects ? 

/* 
    Requirement is 

    const a = 'name'
    const value = 'naman';

    const obj = {};

    Answer: if I print obj

    {name: 'naman'}

    Restriction is -> you need to utilise the variables
    a, value should be utilised ->
*/

// const a = 'name';
// const value = 'naman';
// const obj = {};
//{name: 'naman'}
// obj.a = value;
// console.log(obj);

// obj[a] = value;
// console.log(obj);


// Trial Example ->
// let obj2 = {name: 'naman', age: 10};
// obj2.gender = 'male';
// console.log(obj2);

// obj2['add'] = 'delhi';
// console.log(obj2);

// obj2[add] = 'delhi';
// console.log(obj2);


// function testFunc(key, value, obj){
//     obj[key] = value;
//     return obj;
// }
// const obj = testFunc('name', 'naman', {});
// console.log(obj);


// let obj = {name: 'naman', age: 10};

// for(let a in obj){
//     // console.log(obj['name']);
//     // console.log(obj['age']);

//     // console.log(obj[a]);
//     // console.log(a);

//     // console.log(obj.a);
//     console.log(obj[a]);


//     console.log(obj.name); //
//     console.log(a);
// }


/* arrays are kind of part of object in JS */

/* 
    the indexes in arrays act as the keys for the
    value they are holding
*/

// for(let a in [2,4,6,8]){
//     console.log(a);
// }

// const obj = {name: 'naman', age: 10}
// for(let a of Object.keys(obj)){
//     console.log(a);
//     console.log(obj[a]);
// }

/* 
    Object.keys()
    Object.values()
    Object.entries()

*/

// console.log(Object.keys(obj)); //all keys in array format
// console.log(Object.values(obj)); //all val in array format
// console.log(Object.entries(obj)); //key value pair in array format

/* 
    For of -> is for array
    for in -> is for objects

    indirectly you can utilise for of for objects by doing Object.keys(obj)

    indirectly you can utilise for in for arrays by using array in it

*/

/* 
    Destructing in objects ->

*/
// const arr = ['naman', 10];
// const [a, b] = arr;

// console.log(a, b);

// const obj = {name: 'naman', age: 10};
// const obj2 = {age: 10, name: 'naman'};

// /* 
//     the above two carrry the same values -> 
// */
// console.log(obj.name);
// console.log(obj2.name);

// const obj2 = {age: 10, name: 'naman'};

// const {ag, nm} = {age: 10, name: 'naman'};
// console.log(ag);
// console.log(nm);

// const {age, name, address} = {age: 10, name: 'naman'};
// console.log(age);
// console.log(name);
// console.log(address);//undefined
/* 
    destructing in objects happen with respect to the key name present in the object

*/


// const {age} = {age: 10, name: 'naman'};
// console.log(age);


/* 
    Destructing doesnt get effected if we have more or less values
    if we have more values -> the more values will get an undefiend
    if we have less values, the only values that are getting destructed will be
    copied
*/
// const random = 10;

// function sample(){
//     return {random: Math.random()}
// }

// const {ran} = sample();

// // const {ran} = {random: Math.random()};

// console.log(ran); //

// const random = 10;

// function sample(){
//     return {random: Math.random()}
// }

// const {random: newVariable} = sample();

// console.log(random);
// console.log(newVariable);

// const arr  = [1,2,3,4,5]
// console.log(arr.includes(19)); //boolean

// const strArr = ['naman', 'mahesh', 'kajal', 'harsha'];
// console.log(strArr.includes('maheshs'));


// const [a,b] = [2,10];
// /* 
//     index mapping ->

// */

// const {age: my_own_variable, name} = {age: 10, name: 'naman'};

// //dynamic objects ->
// /* 
//     whenever we are dealing with variables as key then we have to use 
//     [<variable>]
// */

// var key = 'name';
// var value = 'naman';
// const obj ={}; //{name: 'naman'}
// /* 
//     . , ['']
// */
// obj[key] = value;
// console.log(obj);

// /* 
//     I want to ahve a expression which generates integer based number
//     from 20 to 70
// */

// Math.random() //0 to 0.9999999999999 -> 0 and 1 not inclusive 
// /* 
//     min -> 20 
//     max -> 70

//     step 1 -> handle max -> not matter even if they are in float -> 0 to 70 (NI)

// */

// Math.random() * 70 // 0 to 70 (not inclusive)

// /* 
//     step 2 -> making the number start from minimum // I add the minimum
// */
// (Math.random()) * (70-20) + 20 // 1  * (70-20) = 50 + 20 -> 70 minimum 

// /* 
//     step 3 -> handle float -> 
// */

// Math.floor((Math.random()) * (70-20 + 1) + 20) //20. -> 20 & 69..99999 -> 69


// const arr = [['name', 'naman'], ['age', 10], ['add', 'delhi']];

// const makeArrObj = (arr) => {
//     //write your code
//     const obj =  {};
//     for(let keyValArr of arr){
//         obj[keyValArr[0]] = keyValArr[1];
//     }

//     return obj;
// }

// const newObj = makeArrObj(arr)
// console.log(newObj);
/* 
    Expected output: {'name': 'naman', 'age': 10, 'add': 'delhi'}
*/


// const arr = [['name', 'naman'], ['age', 10], ['add', 'delhi']];

// const makeArrObj = (arr) => {
//     //write your code
//     const obj =  {};
//     for(let [key, val] of arr){
//         // obj[keyValArr[0]] = keyValArr[1];
//         obj[key] = val;
//     }

//     return obj;
// }

// const newObj = makeArrObj(arr)
// console.log(newObj);

// const arr = [['name', 'naman'], ['age', 10], ['add', 'delhi']];

// const makeArrObj = (arr) => {
//     //write your code
//     // const obj =  {};
//     const obj = arr.reduce((prev, curr)=>{
//         const [key, val] = curr;
//         prev[key] = val;
//         return prev;
//     }, {});
//     return obj;
// }

// const newObj = makeArrObj(arr)
// console.log(newObj);

/* 
    ... spread with objects -> 
*/

// const obj = {
//     name: 'naman',
//     age: 10
// }
// const obj3 = {
//     add: 'delhi',
//     name: 'Dinesh'
// }

// // const obj2 = {...obj, ...obj3};
// const obj2 = {...obj3, ...obj};
// console.log(obj2);
// const name1 = 'nj'
// const age = 20;
// const add = 'up'
// const obj = {
//     name1: 'naman',
//     age: 10
// }
// const obj3 = {
//     add: 'delhi',
//     name1: 'Dinesh'
// }

// // const obj2 = {...obj, ...obj3};
// const {name1 : nm1, age: ag1, add: ad1} = {...obj3, ...obj};
// // console.log(obj2);

// console.log(name1);
// console.log(age);
// console.log(add);
// console.log(nm1);
// console.log(ag1);
// console.log(ad1);

// const something = [2,4,6,8].toString();
// console.log(something); //arr.join(',')

// // [2,4,6,8].join();
// // {name: 'naman'}.join('')
// const obj = {};

// console.log(obj.toString()); 
// // console.log(obj.join(''));

/* 
    sorting ->
    comparator?

    .sort() -> soritng in arrays
*/

// const nameArr = ['naman', 'harsha', 'dinesh', 'deepak', 'neha'];

// nameArr.sort();
// console.log(nameArr);

// const numbArr = [100, 20, 500, 200, 400, 5];
// numbArr.sort();
// console.log(numbArr);

/* 
    comparator function -> 

    we pass a callback inside the sort


*/


// const numbArr = [100, 20, 500, 200, 400, 5];
// const cb = (a,b) => {
//     console.log(a); //
//     console.log(b); //
//     return b-a;
// }
// numbArr.sort(cb);
// console.log(numbArr);

// const arrObj = [
//     {name: 'naman', age: 10},
//     {name: 'n1', age: 20},
//     {name: 'n3', age: 5},
//     {name: 'n4', age: 15},
// ]
// /* 

// */
// const cb = (a, b) =>{
//     return a.age - b.age
// }

// arrObj.sort(cb);
// console.log(arrObj);


// const numbArr = [100, 20, 500, 200, 400, 5];
// const ascending = (a,b) => {
//     console.log(a);
//     console.log(b);
//     return a-b;
// }
// const descending = (a,b) => {
//     console.log(a);
//     console.log(b);
//     return b-a;
// }
// numbArr.sort(descending);
// console.log(numbArr);

// function hof(){
//     const a = 20;
//     //random => undefined -> why? hositing

//     return random(); //error

    

//     var random = () => {
//         return 'I am a variable'
//     }
//     function random(){
//         return 'I am a function';
//     }
//     var random = '10';
//     var random = 200;

// }
// const answer = hof();
// console.log(answer);
// function abcd(){
// return 10;
// console.log('some')
// console.log('some')
// console.log('some')
// console.log('some')
// console.log('some')
// }


// function hof(){
//     const a = 20;
    
//     var random = () => {
//         return 'I am a variable'
//     }
//     return random(); 
//     function random(){
//         return 'I am a function';
//     }
    
// }
// const answer = hof();
// console.log(answer); //output?

// function hof(){
//     const a = 20;
    
//     var random = 10;
//     return random(); 
//     function random(){
//         return 'I am a function';
//     }
    
// }
// const answer = hof();
// console.log(answer); //output?

// function hof(){
//     const a = 20;
//     return random(); 
//     function random(){
//         return 5;
//     }
//     function random(){
//         return 10;
//     }
    
// }
// const answer = hof();
// console.log(answer); //output?
// function hof(){
//     const a = 20;
//     let random = 10;
//     return random(); 
//     function random(){
//         return 5;
//     }
//     // {

//     // }
    
// }
// const answer = hof();
// console.log(answer); //output?