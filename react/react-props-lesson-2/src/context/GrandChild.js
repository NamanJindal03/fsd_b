import React from 'react'
import MyContext from './context/context'
export default function GrandChild() {
  return (
    <MyContext.Consumer>
        {/* <>
            <div>GrandChild</div> */}
            {
                (contextStateData) => (
                    <>
                        <div>GrandChild</div> 
                        {contextStateData?.data?.count}
                        <button onClick={() =>contextStateData.increaseCount()}>Increase Count</button>
                    </>
                ) 
            }
        {/* </> */}

    </MyContext.Consumer>
  )
}
