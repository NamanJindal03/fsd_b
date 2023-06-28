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


var isEvenNumber = numb => 100;  //there is a auto return applied
/* 
    In the above syntax I cannot use a return keyword 
    When we have a single line syntax, it automaticalls adds a return to it
*/

var returnValueOfTheFunc = isEvenNumber(99);
console.log(returnValueOfTheFunc)