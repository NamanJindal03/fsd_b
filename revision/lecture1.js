//new Questions ->

//var with different funciton context
function random(){
    for(var i=0; i<10; i++){

        (function(i){
            // var j =i;
            setTimeout(()=>{
                console.log(i)
            },0)
        })(i)
    }
}
random();

//var output -> 10 * 10
function random(){
    for(var i=0; i<10; i++){
        // var j =i;
        setTimeout(()=>{
            console.log(i)
        },0)
    }
}
random();

function random2(){
    for(let i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i)
        }, 0)
    }
}

random2();


//old revision Questions
// Revision


// IN js wht is the differnece between undefined and not defined.

// var num; //allocated space for 
// console.log(num) //undefined 

// //not defined?
// console.log(num2); //not defined -> error


// foo(); //here ->
// function foo(){
// 	console.log('here')
// }

// //foo2 = undefined ->

// foo2(); 
// var foo2 = function(){
// 	console.log('here2');
// }

// //Hositing -> 

// //undefined() -> error 

// Q3 -> 
// console.log(!!'string') 

// Q4 What is an IIFE and give an example.
// Immediately invoked function expression ->

// (function abcd(){
// 	console.log('here')
// })()

// for(var i=0; i<10; i++){
// 	setTimeout(()=>{
// 		console.log(i)
// 	},100)
// }


// Q5 What is currying?

// function curry(a){
// 	return function(b){
// 		return a+b;
// 	}
// }
// const store = curry(5);
// console.log(store(3)); //8

// Q6 -> named function and anonymous functions? 

// var namedFunc = function named(){
// 	console.log('abcd');
// }

// var notNamed = function (){
// 	console.log('defg')
// }

// Q7 forEach vs Map -> 

// const a = [10, 20, 40, 50];

// const forEachArr = a.forEach((val, index)=>{
// 	console.log(val+100);
// 	return val + 100;
// })

// const mapArr = a.map((val, index)=>{
// 	console.log(val+100);
// 	return val + 100;
// })


// function random(){
// 	console.log('random')
// }

// random.random = 'random2';
// random();

// Accordian (Famous Component -> Frontend) -> 

// height: 
// overflow: hidden 


// Summary:
// Utmost basics JS -> covered 
// SetTimeout + closure -> covered
// Accordian Question -> Homework ->