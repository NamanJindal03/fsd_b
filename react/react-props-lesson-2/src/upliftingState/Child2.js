import React from 'react'
import GrandChild from './GrandChild'

export default function Child2({count}) {
  return (
    <>
        <GrandChild count={count}/>
    </>
  )
}
