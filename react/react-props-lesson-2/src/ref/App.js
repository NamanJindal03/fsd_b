import React, {useRef, useState} from 'react'

export default function App() {
    const [state1, setState1] = useState(10);
    console.log('component rerendering ')
    const ref1 = useRef(null)
    const ref2 = useRef(10);
    const refComponentCount = useRef(0);
    console.log(ref1);
    console.log(ref2)
    
    function submitForm(e){
        e.preventDefault();
        console.log(ref1.current.value);
        /* 
            document.querySelector('#name')
        */
        console.log(ref2.current.value);
        // console.log('here')
    }


    //useRef can be used to calculate or compute how many tiems a particular component rerendered
    console.log('the component rerendered ', refComponentCount.current , 'times')
    refComponentCount.current++;

  return (
    <div>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="">Enter Your Name</label>
                <input type="text" ref={ref1} id="name"/>
            </div>
            <br />
            <div>
                <label htmlFor="">Enter Your Age</label>
                <input type="text" ref={ref2}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <button onClick={()=> setState1(state1 + 1)}>Intentional State Change</button>
    </div>
  )
}
