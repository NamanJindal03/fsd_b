import React from 'react'

export default function Wrapper2({children}) {
  return (
    <>
        <div>{children('my ')}</div>
    </>
  )
}
