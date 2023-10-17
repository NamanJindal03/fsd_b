import React from 'react'

export default function Card() {
    const card = {
        width: "25%",
        border: "1px solid red"
    }
  return (
    <div style={card}>
        <h1>This is my card</h1>
        <p>These are my card details</p>
    </div>
  )
}
