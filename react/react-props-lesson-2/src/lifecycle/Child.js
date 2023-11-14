import React, {useState, useEffect} from 'react'

export default function Child() {
    const [childState, setChildState] = useState(false)

    //using useEffect as a mounted method
    useEffect(()=>{
        console.log('Child is able to  easily mount')
    }, [])

    //using useEffect as a updated method
    useEffect(()=>{
        console.log('CHild entering update lifecycle')
    }, [childState])

    //using useEffect as an unmounted method
    useEffect(()=>{
        return ()=>{
            console.log('Now Child is unmounting ')
        }
    }, [])
    
  return (
    <>
        <div>Child</div>
        <button onClick={()=> setChildState((prev) => !prev)}>trigger update</button>
    </>
  )
}
