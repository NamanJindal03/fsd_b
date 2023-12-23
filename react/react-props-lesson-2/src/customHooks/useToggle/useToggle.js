import React, { useState } from 'react'

export default function useToggle(defState = false) {
    const [isVisible, setIsVisible] = useState(defState);
    const changeVisibility = () => {
        setIsVisible((prev)=> !prev)
    }
  return [isVisible, changeVisibility]
}
