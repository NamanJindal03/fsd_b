import React, { useEffect, useState, useMemo, useCallback } from 'react'

function Foo({bar, foo}){
    console.log('coming');
    // const options = useMemo(()=>{
    //     return {bar, foo}
    // },[])
    useEffect(()=>{
        console.log('here called')
    }, [bar, foo])
    return <div>FOo</div>
}

export default function App3() {
    const [barValue, setBarValue] = useState("bar value");
    const [fooValue, setFooValue] = useState(10);
    const [count, setCount] = useState(0);

    const foo = useMemo(()=> [1,2,3], []);
    const bar = useCallback(() => {}, []);
  return (
    <>
        <Foo bar={bar} foo={foo}/>
        <button onClick={()=>setCount(count+1)}>increase count</button>
    </>
  )
}

/* 
    what changes you would have to make to make the useEffect get called only when foo or bar changes

    its a trick question -> 
*/