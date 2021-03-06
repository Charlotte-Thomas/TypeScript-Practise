import * as React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'

export interface HelloProps { compiler: string; framework: string; }

const Home = (props: HelloProps) => {

  const name: string = 'Charlotte'

  const [num1, setnum1]: [number, any] = useState(0)
  const [num2, setnum2]: [number, any] = useState(0)
  const [val, setval]: [number, any] = useState(0)

  function setValues(e: any, num: number) {
      const val: number = parseInt(e.target.value)
      if (val) {
        num === 1 ? setnum1(val) : setnum2(val)
      }
  }

  function getVal(e: any) {
    e.preventDefault()
    setval(num1 + num2)
  }

  return (
    <section className="home" >
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <p>{name}</p>
      <form onSubmit={(e) => getVal(e)}>
        <input onChange={(e) => setValues(e, 1)} placeholder='Enter a number'></input>
        <br /> + <br />
        <input onChange={(e) => setValues(e, 2)} placeholder='Enter another number'></input>
        <br />
        <button>enter</button>
      = {val}
    </form>
    </section >
  )
}

export default Home

