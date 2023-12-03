import React, {useEffect, useState} from 'react'

export default function App() {
    const [inputState, setInputState] = useState("")
    function callPostAPI(title){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    function handleSubmit(){
        callPostAPI(inputState);
    }
  return (
    <>
        <input type="text" onChange={(e)=> setInputState(e.target.value)} value={inputState} />
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
