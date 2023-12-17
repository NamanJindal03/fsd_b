import React, {useContext} from 'react'
import MyContext from './context/context';

export default function GrandChild2() {
    const contextStateData = useContext(MyContext);
  return (
    <>
        <div>GrandChild</div> 
        {contextStateData?.data?.count}
        <button onClick={() =>contextStateData.increaseCount()}>Increase Count</button>
    </>
  )
}
