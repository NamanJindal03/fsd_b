import React, { useEffect, useState } from 'react'

export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState('');
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])
  return debouncedValue
}
