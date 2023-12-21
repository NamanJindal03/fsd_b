import React, {useState, useMemo} from 'react'

export default function App4() {
    const [count, setCount] = useState(10)

    const someHeavyComputation = (value) => {
        console.log('called')
        //summing the information
        let sum = 0;
        for(let i=0; i<value; i++){
            sum += i
        }
        return sum;
    }
    const memoizedResult = useMemo(()=>{
        return someHeavyComputation(10000)
    }, [])
  return (
    <>
        { memoizedResult}
        <button onClick={()=> setCount(count+1)}>Chnage State</button>
    </>
  )
}
