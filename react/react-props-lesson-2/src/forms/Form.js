// import React, { useState } from 'react'

// export default function Form() {
//     const [formName, setFormName] = useState('');
//     function handleNameChange(e){
//         console.log(e.target.value)
//         setFormName(e.target.value);
//     }
//   return (
//     <form action="">
//         <input type="text" name="name" onChange={handleNameChange} value={formName}/>
//         <input type="text" name="email" onChange={handleNameChange} value={formName} />
//     </form>
//   )
// }

import React, { useState } from "react";

export default function Form() {
  const [formName, setFormName] = useState("");

  const [formEmail, setFormEmail] = useState("");

  function handleNameChange(e) {
    console.log(e.target.value);

    setFormName(e.target.value);
  }

  function handleEmailChange(e) {
    console.log(e.target.value);

    setFormEmail(e.target.value);
  }

  return (
    <form action="">
      <input
        type="text"
        name="name"
        onChange={handleNameChange}
        value={formName}
      />

      <input
        type="text"
        name="email"
        onChange={handleEmailChange}
        value={formEmail}
      />
    </form>
  );
}
