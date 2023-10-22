import React, {useState} from 'react'

export default function Index() {
    // const [show, setShow] = useState({name: 'naman', age: 10});
    const [arrState, setArrState] = useState([1,2,3])
    console.log('rerendered')

    function increaseAge(){
        // show.age = show.age++;
        // console.log(show.age);
        // setShow({...show, age: show.age+1});
    }
    function appendInArr(){
        // arrState.push(arrState.length+1);
        const tempArr = [...arrState, arrState.length+1]
        setArrState(tempArr);
    }
  return (
    <>
        {/* {show.age >20 && <div>Componet</div> } */}
        {/* <button onClick = {increaseAge}>Increase Age</button> */}

        {arrState.length > 7 && <div>Componet</div>}
        <button onClick = {appendInArr}>Increas arr length</button>
    </>
  )
}

