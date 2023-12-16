import React from 'react'

// export default function Wrapper({children}) {
//   return (
//     <div>Wrapper</div>
//   )
// }

//layout -> 
export default function Wrapper(props) {
    console.log(props);
    return (
      <section style={{width: "50%" , backgroundColor: 'purple'}}>
        <div>This is a data coming from the wrapper</div>
        <div>{props.children}</div>
      </section>
    )
  }
