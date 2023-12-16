import React, {useReducer, useState} from 'react'
import { INCREMENT, DECREMENT, RESET, INCREMENT_BY_A_RANDOM_NUMBER } from './Actions'

export default function App() {

    //Actions -> possible state changes -> increment, decrement, reset

    //const [state, setState] = useState(initialValue)

    // const [state, dispatch] = useState(reducer, initialState)

    function reducer(state, action){
        console.log('reducer called')
        switch(action.type){
            case INCREMENT:
                return {...state, count: state.count+ 1}
            case DECREMENT:
                return {...state, count: state.count- 1}
            case RESET:
                return {...state, count: 0}
            case INCREMENT_BY_A_RANDOM_NUMBER:
                return {...state, count: state.count + action.payload.numb}

        }
        //
    }

    // const increment = () => {
    //     setState((prev)=> {prev+1})
    //     setState((prev)=> {prev+1})
    // }
    useState({count1: 0, count2: 0});
    //update count1 only -> then how do you? 

    const [counter, dispatch] = useReducer(reducer, {count: 0, count2: 0});
  return (
    <>
        <div>
            
            {counter.count}
        </div>
        <div>
            {counter.count2}
        </div>
        <button onClick={()=> dispatch({type:DECREMENT})}>decrement</button>
        <button onClick={()=> dispatch({type:RESET})}>reset</button>
        <button onClick={()=> dispatch({type:INCREMENT})}>increment</button>
        <button onClick={()=> dispatch({type:INCREMENT_BY_A_RANDOM_NUMBER, payload: {numb: 10}})}>increment by 10</button>
    </>
  )
}
