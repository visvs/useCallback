import { useCallback, useState } from 'react'
import { Counter } from './Counter'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  const increment =  ()=>{
    setCount(counter => counter + 1) // usa cbf porque sino toma el valor memorizado de counter
  }

  return (
    <>
      <p>{`Counter: ${count}`}</p>
      <Counter increment={increment}/>
    </>
  )
}