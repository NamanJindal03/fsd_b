import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'

export default function Blog1() {
  const params = useParams();
  if(params.blogId === 'archive'){
    return (
      <>
      <div> 1</div>
      <div>2 </div>
      <div> 3</div>
      <div> 4</div>
      <div> 5</div>
      <div> 6</div>
      <div> 7</div>
      </>
    )
  }
  return (
    <>
        <Nav />
        <div>{`Blog${params.blogId}`}</div>
    </>
  )
}
