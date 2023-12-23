import React, { useState } from 'react'
import useDebounce from './useDebounce'
export default function App() {
    const [inputValue, setInputValue] = useState('')
    const debouncedValue = useDebounce(inputValue, 2000)
  return (
    <div>
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e)=> setInputValue(e.target.value)} 
        />
        <div>
            {debouncedValue}
        </div>
    </div>
  )
}
