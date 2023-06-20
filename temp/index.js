function outer(){
    let b = 10;
    function inner(){
        let a = 20;
        console.log(a);
    }
    return inner;
}
let innerFunc = outer()
console.log(innerFunc) //func defination
innerFunc(); //a = 10