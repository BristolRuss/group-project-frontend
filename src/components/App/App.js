import React from 'react';
import Header from '../Header/Header';
import SpiritCard from '../SpiritCard';
import Drink from '../Drink';
import DrinkCard from '../DrinkCard';
import EasterEgg from '../EasterEgg/EasterEgg'
import FourOhFour from '../FourOhFour/FourOhFour';
import '../../App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import AgeVerification from '../AgeVerification';


function App({verified}) {
  return (
    <div className="App">
      <div className = "wrapper">
      {!verified ? <AgeVerification /> : (
        <Router>
          <Header />
          <Switch>
            <Route exact path = "/">
              <SpiritCard />
            </Route>
            <Route path = "/spirit/:id" render = { ({match}) => (
                <DrinkCard id = {match.params.id} />
            ) } />
            <Route path = "/drink/:id" render = { ({match}) => (
                <Drink id = {match.params.id} />
            ) } />
            <Route path = "/easterEgg">
              <EasterEgg/>
              </Route>
            <Route component = {FourOhFour} />
          </Switch>
        </Router>
        )}
      </div>
    </div>
  );
}

export default App;