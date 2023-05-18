import { useEffect } from 'react'
import './App.css'

export function Counter({increment}) {

    useEffect(()=>{
        console.log('increment has changed')
    },[increment])

  return <button onClick={increment}>+</button>
}