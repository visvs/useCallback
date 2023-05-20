import { useEffect } from 'react'
import './App.css'

export function Counter({increment}) {

    useEffect(()=>{
        console.log('increment has changed')
    },[increment])

    console.log("render child")

  return <button onClick={increment}>+</button>
}