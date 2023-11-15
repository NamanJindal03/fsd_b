import React, {useEffect} from 'react'

export default function Child1({data}) {
    console.log(data)
    useEffect(()=>{
        console.log('Child 1 got mounted')
    }, [])

    useEffect(()=>{
        return ()=>{
            console.log('child 1 got unmounted')
        }
    }, [])
  return (
    <div>{data.title}</div>
  )
}
