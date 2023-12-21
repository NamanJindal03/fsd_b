import React, { useEffect } from 'react'

const Child2 = (props) => {
    useEffect(()=>{
        props.fetchData(2)
    }, [props])
  return (
    <div>Child2</div>
  )
}

export default React.memo(Child2)