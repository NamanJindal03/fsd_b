import React, { useEffect, useState } from 'react'

export default function useLocalStorage(value, key) {
    const [state, setState] = useState(()=>{
        try{
            return JSON.parse(localStorage.getItem(key))
        }
        catch(err){

        }
        return value
        
    })
    const changeState = (value) => {
        setState(value);
    }

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

  return [state, changeState]
}
