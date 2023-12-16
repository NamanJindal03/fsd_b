
import React, {useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case 'handleNameChange': 
            return {...state, name: action.payload.data}
        case 'handleAgeChange': 
            return {...state, age: action.payload.data}
        case 'handleGenderChange':
            return {...state, gender: action.payload.data}
        case 'submitForm':
            return {...state, isFormSubmitted: true}
    }

}

export default function App() {
    const [formState, dispatch] = useReducer(reducer, {name: '', age: '', gender:'male', isFormSubmitted: false})
  return (
    <>
        {formState.isFormSubmitted && <div>{JSON.stringify(formState)}</div>}
        <input type="text" 
            value={formState.name} 
            onChange={(e)=>
                dispatch({type: 'handleNameChange', payload:{data: e.target.value}})
            }
        />
        <input type="text" value={formState.age} 
            onChange={(e)=>
                dispatch({type: 'handleAgeChange', payload:{data: e.target.value}})
            }
        />
        <input type="text" value={formState.gender} 
             onChange={(e)=>
                dispatch({type: 'handleGenderChange', payload:{data: e.target.value}})
            }
        />
        <button onClick={()=>dispatch({type: 'submitForm'})}>Submit</button>
    </>
  )
}
