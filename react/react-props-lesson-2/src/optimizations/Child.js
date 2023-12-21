import React from 'react'

const Child = ({state2}) => {
    console.log('The child is rerendered')
  return (
    <div>Child {state2}</div>
  )
}

export default React.memo(Child)