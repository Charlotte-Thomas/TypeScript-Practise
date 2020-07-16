import * as React from "react";
import { Link } from 'react-router-dom'

export interface HelloProps { compiler: string; framework: string; }

const Home = (props: HelloProps) => {

  const name: string = 'Charlotte'

  return (
  <section className="home" >
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <p>{name}</p>
  </section >
  )
}

export default Home

