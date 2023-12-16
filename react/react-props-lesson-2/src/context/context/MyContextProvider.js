import React, {useState} from 'react'
import MyContext from './context'


export default function MyContextProvider(props) {
    const [count, setCount] = useState(10)

  return (
    <MyContext.Provider
        value={{
            data: {count},
            increaseCount: () => setCount(count + 1)
        }}
    >
        {props.children}
    </MyContext.Provider>
  )
}
