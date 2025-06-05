import React, { useEffect, useState } from 'react'
import useDOMTitle from './customHooks/useDOMTitle'
import useCounter from './customHooks/useCounter'

const CustomHook2 = () => {
  const [count, setCount] = useState(0)
  useDOMTitle(count)
  const [counter, increment, decrement, reset] =  useCounter(10, 5)
  return (
    <>
      <h2>Custom Hooks 2</h2>
      <h4>Title : {count}</h4>
      <button onClick={() => setCount(count+1)}>Increment</button>

      <h2>Counter Hook</h2>
      <h4>Counter from custom hook: {counter}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default CustomHook2