import React from 'react'

const UseCallbackTitle = () => {
  console.log("Title rendered")
  return (
    <h2>useCallback Hook</h2>
  )
}

export default React.memo(UseCallbackTitle)