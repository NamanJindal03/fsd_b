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
var gl = 100;


function inner1(){
    console.log(gl);
    var inn1 = 200;
    console.log(inn1);
    function inner2(){
        console.log(gl);
        console.log(inn1);
        var inn2 = 300;
        console.log(inn2);
    }
    inner2();
    //console.log(inn2)
}
inner1();
console.log(gl);
console.log(inn1);
console.log(inn2);