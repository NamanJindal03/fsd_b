import React, {useState} from 'react';
import Icon from './Icon';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Row, Col } from 'reactstrap';
// import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export default function App() {
    const [isCross, setIsCross] = useState(false);
    const [gameState, setGameState] = useState('progress');
    const [ticTacToeArr, setTicTacToeArr] = useState(new Array(9).fill("empty"));

    function handlePlayerMove(index){
        if(gameState !== 'progress') return;
        if(ticTacToeArr[index] !== 'empty') {
            toast.error('cannot select this tile : already selected');
            console.log('cannot select this tile : already selected');
            return;
        }
        console.log(`${isCross ? "Cross's": "Circle's"} 'turn'`);
        const copyArr = [...ticTacToeArr];
        copyArr[index] = isCross ? 'cross' : 'circle';
        const tempState = isWinnerOrDraw(copyArr);
        if(tempState != 'progress'){
            setGameState(tempState);
        }
        setTicTacToeArr(copyArr)
        setIsCross(!isCross);
    }
    function isWinnerOrDraw(arr){
        let winnerMessage = 'Yayyy winner'
        if(arr[0]=== arr[1] && arr[1] === arr[2] && arr[0] !== 'empty'){
            //handles my row 1 logic
            //is this logic correct or not?
            toast.success(winnerMessage);
            console.log('winner');
            return 'winner';
        }
        if(arr[3]=== arr[4] && arr[4] === arr[5] && arr[4] !== 'empty'){
            //handles row 2 logic
            toast.success(winnerMessage);
            console.log('winner')
            return 'winner';

        }
        if(arr[0]=== arr[3] && arr[3] === arr[6] && arr[0] !== 'empty'){
            //handles col 1 logic
            toast.success(winnerMessage);
            console.log('winner')
            return 'winner';

        }
        if(arr[0]=== arr[4] && arr[4] === arr[8] && arr[0] !== 'empty'){
            //handles diagnal 1
            toast.success(winnerMessage);
            console.log('winner')
            return 'winner';

        }
        if(arr[0] !== 'empty' && arr[1] !== 'empty' && arr[2] !== 'empty' && arr[3] !== 'empty' &&
        arr[4] !== 'empty' && arr[5] !== 'empty' && arr[6] !== 'empty' && arr[7] !== 'empty' &&
        arr[8] !== 'empty'){
            toast.info('draw');
            return 'draw'
        }
        return 'progress';
        //in totality we will have 8 of these if blocks 
        //3 for row 3 for col 2 for diagnal
    }
    function handleDrawOrWinnerUi(){
        if(gameState === 'draw'){
            return "draw"
        }
        if(!isCross){
            return "cross is the winner"
        }
        return "circle is the winner"
    }
    function resetTicTacToe(){
        setIsCross(false)
        setGameState('progress')
        setTicTacToeArr(new Array(9).fill("empty"))
    }
  return (
    <>
        <ToastContainer
            position="top-right"
            theme="dark"
            />
        <ToastContainer />
        <Container>
            <Row>
                <Col md={4} className='offset-md-4'>
                    <div>
                        <h1>{gameState}</h1>
                        <h1>TIC TAC TOE</h1>
                        {gameState !== 'progress' ? 
                            <h2>
                                {handleDrawOrWinnerUi()}
                            </h2> :
                            <h2>
                            {isCross ? "Cross's": "Circle's"} Turn
                            </h2>
                        }
                        
                        <div className='cardBox'>
                            {ticTacToeArr.map((player, index)=>{
                                return (
                                    <div className='card' onClick={() => handlePlayerMove(index)} key={index}>
                                        <Icon player={player}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {(gameState === 'winner' || gameState === 'draw') && <div >
                        <Button onClick={resetTicTacToe}>Reset</Button>
                    </div>}
                </Col>
            </Row>
            
        </Container>
        
        
    </>

  )
}
