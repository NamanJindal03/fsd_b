/* 
    - Request all 3 files at the same time
    - but response should be printed in sequential manner
    - you cannot use Promises
    - print completed after everything is done
*/

// function mockAPIResponse(index, cb){
//     const response = ['a', 'b', 'c']
//     let randomDelay = Math.floor(Math.random()*3000);
//     setTimeout(function(){
//         cb(response[index])
//     }, randomDelay)
// }

// function callMock(index){
//     mockAPIResponse(index, function(a){
//         after(a)
//     })
// }
// function after(data){
//     //print data
//     // console.log(data);
//     //a , b , c
    
// }
// callMock(0)
// callMock(1)
// callMock(2)
// await fetch(`${url2}?symbols=${JSON.stringify(nSortedArray)}`)

// await fetch(`${URL}?symbols=${JSON.stringify(arr)}`) //valid approach -> no issues -> 
/* 
    URL validator present -> 

*/
// const stockPriceURL = new URL('https://real-puce-turtle-tam.cyclic.cloud/stock/stock-prices');
// stockPriceURL.searchParams.set('symbols', JSON.stringify(arr))
// console.log(stockPriceURL);

/* 
    URL -> 
*/
