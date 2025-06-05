import React from 'react'

const Display = (props) => {
  console.log("Display rendered for : ", props.text)
  return (
    <div>{props.text} : {props.value}</div>
  )
}

export default React.memo(Display)