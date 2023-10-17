import React, {useState} from 'react'
import CounterChild from './CounterChild';

console.log('I will get called only once');
let globalCount = 0;

export default function Counter() {
    let countNormal = 0;
    const [count, setCount] = useState(100);
    console.log('parent executed', count);
    function decreaseCount(){
        setCount(count -1);
        // document.querySelector('')
    }
    function resetCount(){
        setCount(100)
    }
    function increaseCount(){
        setCount(count + 1);
    }
    return (    
        <>
            <h1>State Counter</h1>
            <div>{count}</div>
            <button onClick={()=> setCount(count-1)} id='minus'>Minus</button>
            <button onClick={()=>setCount(100)}>Reset</button>
            <button onClick={()=>{
                    setCount(count+1);
                    console.log('official state change and hence repainting happend')
            }}>Add</button>
            <h1>Child Counter</h1>
            <CounterChild count={count}/>

            <h1>Normal Counter</h1>
            <div>{countNormal}</div>
            <button onClick={()=> {
                countNormal--;
                console.log(countNormal)
            }} id='minus'>Minus</button>

            <button onClick={()=>{
                countNormal = 0;
                console.log(countNormal)
            }}>Reset</button>
            <button onClick={()=>{
                    countNormal++;
                    console.log('countNormal',countNormal)
            }}>Add</button>

            <h1>Global Counter</h1>
            <div>{globalCount}</div>
            <button onClick={()=> {
                globalCount--;
                console.log('globalCount',globalCount)
            }} id='minus'>Minus</button>

            <button onClick={()=>{
                globalCount = 0;
                console.log(globalCount)
            }}>Reset</button>
            <button onClick={()=>{
                    globalCount++;
                    console.log('globalCount',globalCount)
            }}>Add</button>
        </>
    )
}
