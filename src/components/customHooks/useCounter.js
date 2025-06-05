import React, { useState } from "react";

const useCounter = (initialValue, value = 1) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialValue);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
