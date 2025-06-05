import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer+1)
        }, 1000)
        return ()  =>{
            clearInterval(intervalRef.current)
        }
    }, [])
  return (
    <>
        <h2>useRef Hook</h2>
        <h4>Timer : {timer}</h4>
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </>
  )
}

export default UseRef