import React, { useState } from "react";

export default function App() {
  const [obj, setObj] = useState({ a: "1", b: "2", c: "3", d: "4" });
  const [arr, setArr] = useState(['a', 'b', 'c'])
  function changeObjState() {
    setObj((prev) => {
      const key = Math.random();
      const value = Math.random();
      return { ...prev, [key]: value };
    });
  }
  return (
    // <>
    //     {/* {JSON.stringify(obj)} */}
    //     <button onClick={changeObjState}>Btn</button>
    // </>
    <>
        {arr}
      <div>
        <h2>State:</h2>

        <ul>
          {Object.keys(obj).map((key) => (
            <li key={key}>
              {key}: {obj[key]}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={changeObjState}>Btn</button>
    </>
  );
}
