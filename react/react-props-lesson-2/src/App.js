import React, {useState} from 'react';
// import {useState} from 'react'
import {Child} from './Child'

// const number1 = 1;
export function App() {
  // const arr = [10, 20, 30, 40, 50];
  // const obj = {name: 'naman', age:10};
  // function aFunctionToBePassedAsProp(){
  //   console.log('i am called')
  // }
  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  const productInformation = [
    {
      id: 1,
      name: 'chair',
      category: 'furniture',
      price: 2000
    },
    {
      id: 2,
      name: 'Pencil',
      category: 'Stationary',
      price: 20
    },
    {
      id: 1,
      name: 'Frame',
      category: 'Decoration',
      price: 500
    }
  ]
  const arr = ['abcd', 'dedfg', 'fffff'];
  const obj = {
    name: 'naman',
    age: 10
  }
  const abcd = 10;

  /* 
    condition ? if true : false

    abcd === 10 ? return true : return false
  
  
  */
 function HandleConditionalRendering(){
  if(abcd === 10){
    if(typeof abcd == 'number'){
      return <div> I am true</div>
    }
    else{
      return <div> I am partially true</div>
    }
  }
  else{
    return <div> I am false</div>
  }
 }
  return (
    <> 

      {productInformation.map((product, index)=>
        (
          <Child 
            productObj= {product}
            key={index}
          />
        )
      )}
      {Object.keys(obj).map((key, index) => (
        <div key={index}>
        <span>{key}</span>
        <span>{obj[key]}</span>
        </div>
      ))}
      <HandleConditionalRendering />
      
      {/* {abcd === 10 ? 
        typeof abcd =='number' ?
        <div> I am true</div> :
        <div>I am partially true</div> 
        : <div> I am false</div>
      } */}



      
       {/*<DivComponent number={2}/>
      <DivComponent number={3}/>
      <DivComponent number={4}/>
      <DivComponent number={5}/>
      <DivComponent number={6}/>
      <DivComponent /> */}
    </>
  );
}

//PROPS 
/* <DivComponent number={2}/>
      <DivComponent number={3}/>
      <DivComponent number={4}/>
      <DivComponent number={5}/>
      <DivComponent number={6}/>*/