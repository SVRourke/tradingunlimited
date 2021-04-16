import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  Home, 
  Contact, 
  Distributor,
  About 
} from './pages'

import { Footer } from './blocks'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/partner' >
          <Distributor />
        </Route>

        <Route path='/about' >
          <About />
        </Route>

        <Route path='/contact' >
          <Contact />
        </Route>

      </Switch>
      <Footer />
    </>

  );
}

export default App;
