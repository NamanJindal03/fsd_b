import React, {useState} from "react";
export default function useBoolean(initialVal){
    const [value, setValue] = useState(initialVal);
  
    const setTrue = () => {
      setValue(true);
    };
  
    const setFalse = () => {
      setValue(false);
    };
  
    const toggle = () => {
      setValue((prevVal) => !prevVal);
    };
  
    return [
      value,
      {
          setTrue,
  
          setFalse,
  
          toggle,
      }
      ]
  };
  