import * as React from "react";
import { Link } from 'react-router-dom'

export interface HelloProps { compiler: string; framework: string; }

const Home = (props: HelloProps) => {

  const name: string = 'Charlotte'

  const [num1, setnum1]: [number, number] = useState(0)

  return (
  <section className="home" >
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <p>{name}</p>
    <form>
      <input placeholder='Enter a number'></input>
      <br /> + <br />
      <input placeholder='Enter another number'></input>
      <br />
      =
    </form>
  </section >
  )
}

export default Home

