let timer;
async function getUserDetails(query){
    try{
        const result = await fetch(`https://dummyjson.com/users/search?q=${query}`);
        if(result.ok){
            const data = await result.json();
            console.log(data)
        }
        else{
            throw new Error('I am not being able to handle')
        }
    }
    catch(err){
        console.log(err)
    }
}
const debouncedSearch = debounce2(getUserDetails, 1000);

function handleOnChange(e){
    //debounce(()=>getUserDetails(e.target.value), 1000)
    debouncedSearch(e.target.value)
}

function debounce2(fn, delay){
    let timer;
    return function(queryValues){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(queryValues);
        }, delay)
    }
}

function debounce(fn, delay){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        fn()
    }, delay)
}



// const debouncedSearch = debounce2(getUserDetails, 1000);
// const debouncedSearch2 = debounce2(getUserDetails, 1000);
// let toggle = true;

// function handleOnChange(e){
//     //debounce(()=>getUserDetails(e.target.value), 1000)
//     debouncedSearch(e.target.value)
//     if(toggle){
//         debouncedSearch(e.target.value);
//     }
//     else{
//         debouncedSearch2(e.target.value)
//     }
//     toggle = !toggle;
// }

// function debounce2(fn, delay){
//     let timer;
//     return function(queryValues){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn(queryValues);
//         }, delay)
//     }
// }


function throttleExample(){
    console.log('I have been throttled');
}

function throttle(fn, delay){
    //write throttle logic
    let canExecute = true;
    let timerId;
    return function(){
        // console.log('called')
        if(canExecute){
            fn();
        }
        canExecute = false;
        if(!timerId){
            timerId = setTimeout(()=>{
                canExecute = true
                timerId = null;
            }, delay)
        }
    }
}

const haveBeenThrottled = throttle(throttleExample, 500);

// for(let i=0; i<4000; i++){
//     setTimeout(()=>{
//         haveBeenThrottled()
//     },1)
// }
window.addEventListener('scroll',()=>{
    console.log('scroll called')
    haveBeenThrottled();
})