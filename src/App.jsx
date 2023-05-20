import { useCallback, useState } from 'react'
import { Counter } from './Counter'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  const increment =  useCallback(()=>{
    setCount(currentValue => currentValue + 1);
    // TODO: usa cbf porque sino toma el valor memorizado de counter
  }, [])

  return (
    <>
      <h2>{`Counter: ${count}`}</h2>
      <Counter increment={increment}/>
    </>
  )
}