import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  Home, 
  Contact, 
  Distributor 
} from './pages'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/partner' >
        <Distributor />
      </Route>

      <Route path='/contact' >
        <Contact />
      </Route>

    </Switch>
  );
}

export default App;
