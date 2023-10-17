import React, {useState} from 'react'
import Child from './Child'


export default function StateLesson2() {
    const [isChild, setIsChild] = useState(false);
    // const [iWish, setIWish] = useState(false);
  return (
    <>
        <div>StateLesson2</div>
        {isChild ? <Child /> : null }
        <button 
            onClick={()=>setIsChild(!isChild)}>
                BTN
        </button>
    </>
  )
}
