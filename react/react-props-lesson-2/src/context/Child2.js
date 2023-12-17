import React, {useContext} from 'react'
import MyContext from './context/context';



export default function Child2() {
 const contextStateData = useContext(MyContext);
 console.log(contextStateData);

  return (
    <>
    <div>Child2</div> 
    {contextStateData?.data?.count}
    <button onClick={() =>contextStateData.increaseCount()}>Increase Count</button>
    </>
  )
}

