import React, {useEffect} from 'react'


export default function Child2({data}) {
    
    console.log(data)
    //mount and 
    // useEffect(()=>{
    //     console.log('Child 2 got mounted')
       
    // }, [])

    // //unmount separately 
    // useEffect(()=>{
    //     return ()=>{
    //         console.log('child 2 got unmounted')
    //     }
    // }, [])

    //mounting and unmounting together -> How?
    useEffect(()=>{
      console.log('Child 2 got mounted')
        return ()=>{
          console.log('child 2 got unmounted')
      }
  }, [])
  return (
    <div>{data.title}</div>
  )
}
