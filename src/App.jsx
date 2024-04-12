// 

import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const add = () => {
      setCount(count + 1)
  }

  const remove = () => {
    // Check if count is greater than 0 before decrementing
    if (count > 0) {
      setCount(count - 1)
      
    }
  }

  return (
    <>
      <h1>This is the counter App</h1>

      <h3>Counter: {count}</h3>

      <button onClick={add}>Add</button>

      <br />
      <br />

      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
