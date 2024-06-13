import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if(count>0){
      setCount(count-1)
    }else{
      alert("Count can't be less than 0")
    }

  }
  const reset=()=>{
    setCount(0)
  }
  useEffect(()=>{
    let interval = setInterval(()=>{
      setCount(count+1)
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  })
  return (
    <div className='App'>
      <p className='fs-2 fw-bold text-danger'>{count}</p>
      <button className='btn btn-primary fw-bold' onClick={increment}>Increment</button>
      <button className='btn btn-warning mx-2 fw-bold' onClick={decrement}>Decrement</button>
      <button className='btn btn-danger mx-2 fw-bold' onClick={reset}>Reset</button>
    </div>
  )
}

export default App
