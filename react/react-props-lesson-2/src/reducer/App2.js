import React, {useReducer} from 'react'

export default function App() {

    //Actions -> possible state changes -> increment, decrement, reset

    //const [state, setState] = useState(initialValue)

    // const [state, dispatch] = useState(reducer, initialState)

    function reducer(state, action){
        console.log('reducer called')
        switch(action){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return 0
        }
        //
    }

    // const increment = () => {
    //     setState((prev)=> {prev+1})
    //     setState((prev)=> {prev+1})
    // }

    const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
        {count}
        <button onClick={()=> dispatch("decrement")}>decrement</button>
        <button onClick={()=> dispatch("reset")}>reset</button>
        <button onClick={()=> dispatch("increment")}>increment</button>
    </>
  )
}
