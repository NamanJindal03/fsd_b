import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import './Modal.css'
import ModalColumn from './ModalColumn';

export default function Modal({show, closeModal, data}) {
  const [bodyStats, setBodyStats] = useState([]);
  const [stats, setStats] = useState([]);
  const [baseStats, setBaseStats] = useState([]);

    useEffect(()=>{
      const {height, weight, stats = []} = data;
      console.log(height);
      console.log(weight)
      const tempBodyStats = [];
      tempBodyStats.push({'height': height})
      tempBodyStats.push({'weight':weight})
      setBodyStats(tempBodyStats);

      const tempStats = [];
      const tempBaseStats = [];

      let count = 1;
      for(let individualStat of stats ){
        const {base_stat, stat} = individualStat;
        const {name } = stat;
        tempStats.push({[`Stat${count}`] : name});
        tempBaseStats.push({[`Bs${count}`]: base_stat})
        count++;
      }
      setBaseStats(tempBaseStats);
      setStats(tempStats);
    }, [data])
    //state of modal, whether you want it to be opened or not
    console.log(data);
    if(!show) {return null }
  return ReactDOM.createPortal(
    <div className='modal'>
        <div className='content'>
          <div className='flex alignPokemonContainer'>
            <img src={data.image} alt="" className='modalPokemonImage '/>
            <h1>{data.name}</h1>
          </div>
          <div className='pokemonStats'>
            <ModalColumn data={bodyStats} />
            <ModalColumn data={stats} isSpecialClasses={true}/>
            <ModalColumn data={baseStats}/>
          </div> 
          <div className="crossBtn" onClick={closeModal}>X</div>
            {/* This is Modal sample content
            <button onClick={closeModal}>Close Modal</button> */}
        </div>
        <div className='overlay' onClick={closeModal}></div>
        
    </div>,
    document.getElementById("portal")
  )
}
