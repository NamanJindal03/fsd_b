//Imagine we are getting this code from some external codebase
// var func = 10;
var func = (num, num2) => {
    return num + num2;
}

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