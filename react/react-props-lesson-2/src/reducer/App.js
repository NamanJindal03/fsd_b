import React, {useReducer} from 'react'
import { INCREMENT, DECREMENT, RESET } from './Actions'

export default function App() {

    //Actions -> possible state changes -> increment, decrement, reset

    //const [state, setState] = useState(initialValue)

    // const [state, dispatch] = useState(reducer, initialState)

    function reducer(state, action){
        console.log('reducer called')
        switch(action){
            case INCREMENT:
                return {count: state.count+ 1}
            case DECREMENT:
                return {count: state.count- 1}
            case RESET:
                return {count: 0}
        }
        //
    }

    // const increment = () => {
    //     setState((prev)=> {prev+1})
    //     setState((prev)=> {prev+1})
    // }

    const [counter, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
        {counter.count}
        <button onClick={()=> dispatch(DECREMENT)}>decrement</button>
        <button onClick={()=> dispatch(RESET)}>reset</button>
        <button onClick={()=> dispatch(INCREMENT)}>increment</button>
    </>
  )
}
