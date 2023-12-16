import React, { useState } from 'react'
import Wrapper from './Wrapper'
import Wrapper2 from './Wrapper2';

export default function App() {
    const [isH2, setIsH2] = useState(false);
    function h1Called(){
        console.log('h1Called')
    }
  return (
    <>
        <Wrapper>
            <div>I am present inside the wrapper</div>
        </Wrapper>
        <Wrapper newProp={'i am the prop'}>
            <section>
                <h1 onClick={h1Called}>This is the title</h1>
                {isH2 && <h2>This is the subtitle</h2>}
                <button onClick={()=> setIsH2(!isH2)}>Submit</button>
            </section>
        </Wrapper>
        <Wrapper2>
            {(param)=>{
                if(param.length > 5){
                    return (<>
                        <div>{param}</div>
                    </>)
                }
                else{
                    return(<>
                        <div>Common</div>
                    </>)
                }
            }}
        </Wrapper2>
    </>
    
  )
}
