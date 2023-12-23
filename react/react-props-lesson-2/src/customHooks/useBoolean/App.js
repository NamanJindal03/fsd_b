import React from 'react'
import useBoolean from './useBoolean'
export default function App() {
//     const [toggleValue, switchToggleValue] = useToggle()
//     return (
//     <>
//         {toggleValue ? <div>visible</div> : null}
//         <button onClick={switchToggleValue}>change</button>
//     </>
//   )

    const [value, booleanFuncs] = useBoolean()
    return (
        <>
            {value ? <div>visible</div> : null}
            <button onClick={booleanFuncs.toggle}>change</button>
            <button onClick={booleanFuncs.setFalse}>false</button>
            <button onClick={booleanFuncs.setTrue}>true</button>

        </>
    )
}
