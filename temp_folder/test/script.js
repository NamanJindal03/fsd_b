let counter = 1;
const clickHandler = () => {
    let display = document.getElementById("onButtonClick");
    display.innerHTML = "You clicked me " + counter + " times";
    counter += 1;
}

const throttle = function throttleFunc(){
    console.log('called')
    let timer;
    return function(){
        if(!timer){
            console.log('exec')
            clickHandler();
            timer = 'timer yet to set';
            return;
        }
        if(timer == 'timer yet to set'){
            document.getElementById('myButton').setAttribute('disabled',true)
            timer = setTimeout(()=>{
                clickHandler();
                timer = 'timer yet to set';
                document.getElementById('myButton').removeAttribute('disabled')
            }, 2000);
        }
    }
}
console.log(throttle);
// Write your code here

document.getElementById('myButton').addEventListener('click', throttle());