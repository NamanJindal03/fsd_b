import React from 'react'

function Child({alphabets}) {
  return (
    <>
        <div>
            {alphabets.map((alphabet)=>(
                <div>{alphabet}</div>
                    
            ))}
            {/* {alphabets.map((alphabet)=>{
                return (<div>{alphabet}</div>)
                    
            })} */}

        </div>
    </>
  )
}

export default Child