import { specialSort, specialSort2 } from "./common.js";

specialSort()
// ///comments?postId=2
// for(let id=1; id<5; id++){

//     axios.get(`${API}/comments?postId=${id}`)
//     .then(({data})=>{
//         // console.log(apiInfo);
//         // console.log(apiInfo.data)
//         console.log(data); //??????????
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// console.log('abcd')
// console.log(10+20)

// fetch('https://jsonplaceholder.typicode.com/wfuihewhfiuwfh/1',{
//     method: 'GET'
// })
// .then((data)=>{
//     if(data.ok){
//         return data.json()
//     }
//     // console.log(data.data)
//     throw new Error('Error')
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


//POST Requests ->

const dataToBeSentToBackend = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

//fetch -> Post ->
fetch(`${API}/posts`,{
    method: 'POST',
    body: JSON.stringify(dataToBeSentToBackend),
    headers: {
        'Content-type': 'application/json',
    },
})
.then((data)=>{
    // console.log(data);
    return data.json()
})
.then((data) => {
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

//much more accurate -> 
axios.post(`${API}/posts`, dataToBeSentToBackend, {
    headers: {
        'Content-type': 'application/json'
    }
})
    .then((data)=>{
        console.log(data.data)
    })