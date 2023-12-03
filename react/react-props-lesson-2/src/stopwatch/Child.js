import React, {useState, useEffect} from 'react'

export default function Child() {
    const [count, setCount] = useState(10);
    //setTimeout
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         if(count > 0){
    //             setCount((prev)=>{
    //                 return prev -1
    //             })
    //         }
    //     },1000)
    // }, [count])

    useEffect(() => {
        let timer = setInterval(()=>{
            console.log('called')
            setCount((prev)=>{
                return prev -1
            })
        }, 1000)

        return () =>{
            console.log('stopped')
            clearInterval(timer);
        }
    }, [])

    useEffect(()=>{
        return () =>{
            console.log('yet another function added to secret location for unmount')
        }
    },[])

    function handleClick(){
        console.log('clicked');
    }

    useEffect(() => {window.addEventListener('click', handleClick)}, [handleClick])
  return (
    <>
        {count}
    </>
  )
}
