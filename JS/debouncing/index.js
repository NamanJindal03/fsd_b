let timer;
async function getUserDetails(query){
    const result = await fetch(`https://dummyjson.com/users/search?q=${query}`);
    const data = await result.json();
    console.log(data)
}

function handleOnChange(e){
    
    debounce(()=>getUserDetails(e.target.value), 1000)
}

function debounce(fn, delay){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        fn()
    }, delay)
}