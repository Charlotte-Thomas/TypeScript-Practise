import * as React from "react";
import * as ReactDOM from "react-dom"; // have to do imports this way rather than: import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Home from './components/Home'

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      {/* <Route exact path="/" compiler="TypeScript" framework="React" component={Home} /> */}
      <Route exact path="/" render={(props) => <Home compiler="TypeScript" framework="React" />} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)