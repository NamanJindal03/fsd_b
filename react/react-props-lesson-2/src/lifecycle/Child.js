import React, {useState, useEffect} from 'react'

export default function Child() {
    const [childState, setChildState] = useState(false);
    const [childState2, setChildState2] = useState(false);
    const [childState3, setChildState3] = useState(false);

    //using useEffect as a mounted method
    useEffect(()=>{
        console.log('Child is able to  easily mount')
    }, [])

    //using useEffect as a updated method
    useEffect(()=>{
        console.log('CHild entering update lifecycle') //function get triggered or not?
    }, [childState, childState2])

    // useEffect(()=>{
    //     console.log('some child update, hence update lifecycle') //function get triggered or not?
    // }, [childState3])


    // useEffect(()=>{
    //     console.log('specific function for childState 1 update') //function get triggered or not?
    // }, [childState])
    // useEffect(()=>{
    //     console.log('specific function for childState 2 update') //function get triggered or not?
    // }, [childState2])
    // useEffect(()=>{
    //     console.log('specific function for childState 3 update') //function get triggered or not?
    // }, [childState3])


    //using useEffect as an unmounted method
    useEffect(()=>{
        return ()=>{
            console.log('Now Child is unmounting ')
        }
    }, [])

    //useEffect with no dependency array is a khula saand (uncontrollable bull)
    //we never ever do this
    // useEffect(()=>{
    //     console.log('I am always executed');
    // })//no depenecy, hence no matter what changes, it will get triggered
    
    /* 
    
            childState = 10;

            if(childState ) somehow updates on some condition -> execute, childstate !=10 then execute below 
            abcd
    */
  return (
    <>
        <div>Child</div>
        <button onClick={()=> setChildState((prev) => !prev)}>trigger update</button>
        <div>
            <button onClick={()=> setChildState2((prev) => !prev)}>trigger another state update</button>
            <button onClick={()=> setChildState3((prev) => !prev)}>state 3 changed</button>
        </div>

    </>
  )
}
