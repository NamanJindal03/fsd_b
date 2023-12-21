import React, {createRef, useEffect, useRef, useState} from 'react'

// export default function App() {
//     const useRef1 = useRef(0);
//     const createRef1 = createRef(0);
//     const [count, setCount] = useState(0);
//     useRef1.current++;
//     createRef1.current++;
//   return (
//     <>
//         <div>{useRef1.current}</div>
//         <div>{createRef1.current}</div>
//         <div>{count}</div>
//         <button onClick={() => setCount(count+1)}>Increase Count</button>
//     </>
//   )
// }

// export default function App() {
//     const useRef1 = useRef();
//     const createRef1 = createRef();
//     const [count, setCount] = useState(0);
//     if(!useRef1.current){
//         useRef1.current = count;
//     }
//     if(!createRef1.current){
//         createRef1.current = count;
//     }
//   return (
//     <>
//         <div>{useRef1.current}</div>
//         <div>{createRef1.current}</div>
//         <div>{count}</div>
//         <button onClick={() => setCount(count+1)}>Increase Count</button>
//     </>
//   )
// }
/* 
    initial values -> 
    3 output

    when I click on the increase count button->
    3 output

*/

//refs -> 
export default function App(){
    const inputRef = useRef(null)
    const inputRefMagic = useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    function focus(){
        inputRefMagic.current.value ='Harsh'
    }

    function blur(){
        inputRefMagic.current.value =''
    }

    return(
        <>
            <input type="text" ref={inputRef}/>
            <input type="text" ref={inputRefMagic} onFocus={focus} onBlur={blur}/>
        </>
    )
}

/* 
    Harsha
    ''
*/