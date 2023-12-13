import React from 'react'

export default function ModalColumn({data, isSpecialClasses}) {
  return (
    <div>
        {data.map((obj)=>{
        const a = Object.entries(obj);
        console.log(a)
        return (
            <div className={`${isSpecialClasses && 'flex constraintWidth'}`}>
              <span className='statHeads statContent'>{a[0][0]}: </span>
              <span className='statContent'>{a[0][1]}</span>
            </div>
        )
        })}
    </div>
  )
}
