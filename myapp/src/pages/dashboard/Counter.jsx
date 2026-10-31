import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] =useState(0)
  const incr=()=>{
    setCount(count+1)
  }
  const decr=()=>{
    setCount(count-1)
  }
  return (
    <>
    <h1>Counter</h1>
    <h3>{count}</h3>
    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    </>
  )
}

export default Counter