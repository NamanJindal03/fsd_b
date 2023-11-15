import React, {useState, useEffect} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function App() {
    const [apiData1, setApiData1] = useState({})
    const [apiData2, setApiData2] = useState({})
    async function main(){
      let todo1 = await random('https://jsonplaceholder.typicode.com/todos/1');
      console.log(todo1)
      setApiData1(todo1);

      let todo2 = await random('https://jsonplaceholder.typicode.com/todos/2');
      console.log(todo2)
      setApiData2(todo2);
    }
    async function random(apiRequest){
        const response = await fetch(apiRequest);
        const data = await response.json();
        return data
        
    }
    useEffect(()=>{
      main();
        
    }, [])
   
    const [isChild1, setIsChild1] = useState(true);
  return (
    <>

        {isChild1 ? <Child1 data={apiData1}/> : <Child2 data={apiData2}/>}
        <button onClick={() => setIsChild1((prev)=> !prev)}> Change Component </button>
    </>
  )
}
