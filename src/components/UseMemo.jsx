import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const isEven = () =>{
        let i = 0
        while (i < 200000) i++
        return count % 2 === 0
    }
    const memoizedIsEven = useMemo(() => isEven(), [count])
  return (
    <>
        <h2>useMemo Hook</h2>
        <h4>{count} is {memoizedIsEven ? 'Even' : 'Odd'}</h4>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <h4>{count2}</h4>
        <button onClick={() => setCount2(count2+1)}>Increment count2</button>
    </>
  )
}

export default UseMemo