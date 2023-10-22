import React, {useState} from 'react';
import Child from './Child';
import './style.css';
const negative = 'negative';
const postive = 'positive'
export default function Index() {
    const [isError, setIsError] = useState(false);
  return (
    <>
        <div style={isError ? {color: 'red'} : {color: 'green'}}>Index</div>
        <div className='negative'>Negative</div>
        <div className='positive'>Positive</div>

        <h1>Do condition rendering of classname on below</h1>

        {/* <div className={isError ? 'negative' : 'positive'}>Sorted</div> */}

        {/* <div className={isError ? 'negative'+' common' : 'positive'+' common'}>Sorted</div> */}
        {/* <div className={isError ? 'negative common' : 'positive common'}>Sorted</div> */}

        <div className={`common ${isError ? negative : postive}`}>Sorted</div>

        {!isError && <div >Index2</div>}
        {!isError ? <div >Index3</div> : null}
        <Child />
    </>
  )
}
