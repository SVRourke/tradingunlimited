import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {
  Home, 
  Contact, 
  Distributor 
} from './pages'

function App() {
  return (
    <div>
      <h1>APP</h1>
      <Link to='/'>home</Link>
      <Link to='/partner'>Become a distributor</Link>
      <Link to='/contact'>Contact</Link>

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

    </div>
  );
}

export default App;
