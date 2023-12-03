import React from 'react'
import ReactDOM from "react-dom"
import './Modal.css'
export default function Modal({show, closeModal, data}) {
    //state of modal, whether you want it to be opened or not
    console.log(data);
    if(!show) {return null }
  return ReactDOM.createPortal(
    <div className='modal'>
        <div className='content'>
            This is Modal sample content
            <button onClick={closeModal}>Close Modal</button>
        </div>
        <div className='overlay' onClick={closeModal}></div>
    </div>,
    document.getElementById("portal")
  )
}
