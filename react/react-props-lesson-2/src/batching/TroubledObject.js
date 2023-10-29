    import React,{useState} from 'react'

    const valueArray = [
        "rnadojm", "xvtpqyr", "hkldwzg", "fjsniea", "byocluv", "qpwoeir",
        "mnbvcxz", "zxcvbnm", "lkjhgfds", "poiuytre", "asdfghjk", "hgfdsawe",
        "vbnmkiuy", "rewqpolk", "yuikmnbv", "tfedcxza", "ujnmlopi", "plmnkoij",
        "nbvcxzlk", "poiuytqwe"
      ];
      const keyArray = [
      
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      
      ];
export default function TroubledObject() {
    const [obj, setObj] =  useState({});
    function updateObjectRandomly(){
        const randomKeyIndex = Math.floor(Math.random()* (keyArray.length-1) );
        const randomValueIndex  = Math.floor(Math.random()* (valueArray.length-1));
        console.log(randomKeyIndex);
        console.log(randomValueIndex);
        const newObj = {[keyArray[randomKeyIndex]]: valueArray[randomValueIndex]};
        
        //avoid using, use below
        // const newObj2 = {...obj, ...newObj}
        // setObj(newObj2); 

        setObj((prev)=>{
            return {...prev, ...newObj}
        })
    }

  return (
    <>
        {Object.keys(obj).map((objKey, key)=>{
            return (
                <div style={{display: 'flex', columnGap: '10px'}} key={key}>
                    <span>{objKey}</span>
                    <span>{obj[objKey]}</span>
                </div>
            )
        })}
        <button onClick={updateObjectRandomly}>update the object randomly</button>
    </>
  )
}
