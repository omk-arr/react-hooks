import React, { useState } from "react";
function UseState(props) {
  const [counter, setCounter] = useState(0);
  let counterOp = (val) => {
    if (val === 1) setCounter(counter + 1);
    else if (val === 0 && counter > 0) setCounter(counter - 1);
    else setCounter(0);
  };
  return (
    <>
      <h5>Counter {counter}</h5>
      <button onClick={() => counterOp(1)}>Increment</button>
      <button onClick={() => counterOp(0)}>Decrement</button>
      <button onClick={() => counterOp(2)}>Reset</button>
    </>
  );
}
export default UseState;
