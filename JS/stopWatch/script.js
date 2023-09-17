// javascript code goes here

const startBtnTag = document.querySelector('#start');
const pauseBtnTag = document.querySelector('#pause');
const stopBtnTag = document.querySelector('#stop');
const timeTag = document.querySelector('#time');
timeTag.textContent = '00:00:00';
//disabale pause and stop

let startTimer;
let setIntervalTimerId;
let currentTime

function msToStopWatchTime(timeInMS){
    const seconds = Math.floor(timeInMS/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    let displaySeconds = seconds %60;
    let displayMinutes = minutes % 60;
    let displayHours = hours%24;
    displaySeconds = displaySeconds < 10 ? `0${displaySeconds}`: `${displaySeconds}`;
    displayMinutes = displayMinutes < 10 ? `0${displayMinutes}`: `${displayMinutes}`;
    displayHours = displayHours < 10 ? `0${displayHours}`: `${displayHours}`;
    return `${displayHours}:${displayMinutes}:${displaySeconds}`
}

function start(){
    //disbale start button & enable pause and stop
    startTimer = new Date().getTime();
    setIntervalTimerId = setInterval(()=>{
        currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTimer;
        const stopwatchString = msToStopWatchTime(elapsedTime);
        timeTag.textContent = stopwatchString;

        console.log(stopwatchString);
    }, 500)
}
function pause(){

}
function stop(){

    }