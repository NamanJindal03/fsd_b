import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const params = useParams();
    console.log(params)
    useEffect(()=>{
      console.log(`domain.com/profile/${params.profileId}/${params.continentId}`)
      // fetch(`domain.com/profile`)
    }, [])
  return (
    <>
        This is {params.profileId}. {params.profileId} live in {params.continentId}
    </>
  )
}
