"use client"

import React, { useState } from 'react'

const page = () => {
  // let count = 12;
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 10)
  }

  return (
    <>
      <h1>Page in Next JS</h1>

      <p>Count : {count}</p>
      
      <button onClick={handleButton} className='my-button' >Submit</button>
      
    </>
  )
}

export default page