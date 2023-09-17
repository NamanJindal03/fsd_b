// export default function getProducts(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// }

// const foodReady = false;

// function placeOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if (foodReady) {
//             resolve("Order is ready. Enjoy your pizza!");
//           } else {
//             reject("Food is burnt. Order cannot be completed.");
//           }
//     }, 1000)

//   });
// }
// async function middleware(){
//     try{
//         const value = await placeOrder();
//         // console.log('abcd')
//         console.log(value) //
//         // console.log('defg')
//     }
//     catch(err){
//         console.log(err)
//     }

//   }

//   middleware()
//   console.log('outside middleware')
//   console.log('outside middleware')
//   console.log('outside middleware')
//   console.log('outside middleware')
//   console.log('outside middleware')

// const API = "https://jsonplaceholder.typcode.com/todos/1";

// fetch(API)
//   .then((response) => response.json())

//   .then((data) => {
//     console.log(data);
//   })

//   .catch((error) => {
//     console.error(error);
//   });

// async function getData(){
//     try{
//         const apiResponse = await fetch(API);
//         const data = await apiResponse.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getData();

// let marketCapData;
// let stockNameData;
// const API = "https://real-puce-turtle-tam.cyclic.cloud/";

// async function getHighestMarketCapStockDetails(){
//     try{
//     const apiResponse = await fetch(`${API}stock/stock-market-caps`)
//     marketCapData = await apiResponse.json()
//     const apiResponse2 = await fetch(`${API}stock/stock-symbols`)
//     stockNameData = await apiResponse2.json()
//     const sortedMarketCapData = marketCapData.sort((stockA, stockB)=>{
//         return stockB['market-cap'] - stockA['market-cap']
//       })
//       const topMarketCapStock = sortedMarketCapData[0];
//       const [filteredStockName] = stockNameData.filter((stock)=>{
//         return stock.symbol === topMarketCapStock.symbol
//       })
//       console.log(filteredStockName);
//       console.log(topMarketCapStock);
//       const consolidatedData = {...filteredStockName, ...topMarketCapStock};
//       console.log(consolidatedData);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getHighestMarketCapStockDetails()


