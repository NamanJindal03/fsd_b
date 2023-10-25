import React, {useState} from 'react';
// import Card from './Card';
import './style.css'

export default function App() {
    const [isCross, setIsCross] = useState(false);
    // const [gameState, setGameState] = useState('progress');
    const [ticTacToeArr, setTicTacToeArr] = useState(new Array(9).fill("empty"));

    function handlePlayerMove(index){
        if(ticTacToeArr[index] !== 'empty') {
            console.log('cannot select this tile : already selected');
            return;
        }
        console.log(`${isCross ? "Cross's": "Circle's"} 'turn'`);
        const copyArr = [...ticTacToeArr];
        copyArr[index] = isCross ? 'cross' : 'circle';
        setTicTacToeArr(copyArr)
        setIsCross(!isCross);
    }
  return (
    <>
        <div>
            <h1>TIC TAC TOE</h1>
            <h2>{isCross ? "Cross's": "Circle's"} Turn</h2>
            <div className='cardBox'>
                {ticTacToeArr.map((player, index)=>{
                    return (
                        <div className='card' onClick={() => handlePlayerMove(index)} key={index}>
                            {player}
                        </div>
                    )
                })}
            </div>
            
        </div>
        
    </>

  )
}
