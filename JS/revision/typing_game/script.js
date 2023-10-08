const API = 'https://api.quotable.io/random';
const displayQuoteTag = document.querySelector('.displayQuote');
let currentQuote = [];
let currentIndexOfQuote = 0;
let quoteLength;
let allLetterSpanTags;
async function getQuote(){
    const result = await fetch(API);
    const data = await result.json();
    currentQuote = data.content;
    quoteLength = data.length;
    currentIndexOfQuote = 0;
    displayQuote(data.content)
}

function displayQuote(quote){
    const container = document.createElement('div'); //empty container
    for(let letter of quote){
        const spanTag = document.createElement('span');
        spanTag.textContent = letter;
        container.appendChild(spanTag);
    }
    displayQuoteTag.innerHTML = '' //
    displayQuoteTag.appendChild(container)
    allLetterSpanTags = document.querySelectorAll('span');
}

getQuote();

window.addEventListener('keypress', (e)=>{
    if(currentQuote[currentIndexOfQuote] === e.key){
        allLetterSpanTags[currentIndexOfQuote].classList.add('correct')
    }
    else{
        allLetterSpanTags[currentIndexOfQuote].classList.add('incorrect')
    }
    currentIndexOfQuote++;
    if(currentIndexOfQuote >= quoteLength){
        getQuote();
    }
})