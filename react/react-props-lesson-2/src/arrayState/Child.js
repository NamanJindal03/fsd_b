import React from 'react'

export default function Child({arr}) {

  return (
    <>
        {arr.map((val)=>{
            return (
                <div key={val._id}>{val.data}</div>
            )
        })}
    </>
  )
}
