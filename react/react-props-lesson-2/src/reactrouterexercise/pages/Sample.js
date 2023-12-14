import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

// export default function Sample() {
//   return (
//     <Nav>
//         <NavLink to="/home"
//     </Nav>
//   )
// }
export default function Sample() {
  const [urlPath, setUrlPath] = useState('/');
  const navigate = useNavigate();

  return (
    <>
    
      <div>Sample</div>
      <input type="text" onChange={(e)=> setUrlPath(e.target.value)} />
      {/* <button> <Link to={`/${urlPath}`}>Redirect</Link></button> */}
      <div onClick={() => navigate('/home', {state: {someState: 1}})}> Redirect to home</div>
    </>
  )
}
