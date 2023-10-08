const API = 'https://api.quotable.io/random';
const displayQuoteTag = document.querySelector('.displayQuote');
let currentQuote = [];
let currentIndexOfQuote = 0;
let allLetterSpanTags;
async function getQuote(){
    const result = await fetch(API);
    const data = await result.json();
    currentQuote = data.content;
    currentIndexOfQuote = 0;
    displayQuote(data.content)
}

function displayQuote(quote){
    const container = document.createDocumentFragment();
    for(let letter of quote){
        const spanTag = document.createElement('span');
        spanTag.textContent = letter;
        container.appendChild(spanTag);
    }
    displayQuoteTag.appendChild(container);
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
})