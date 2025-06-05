import React, { useCallback, useState } from 'react'
import Title from './useCallbackChilds/Title'
import Display from './useCallbackChilds/Display'
import Button from './useCallbackChilds/Button'

const UseCallback = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)
    const incrementAge = useCallback(() =>{
        setAge(age+1)
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary+1000)
    },[salary])
  return (
    <>
        <Title/>
        <Display text="Age" value={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Display text="Salary" value={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default UseCallback