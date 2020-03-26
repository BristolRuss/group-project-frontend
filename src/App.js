import React from 'react';
import Header from './components/Header/Header';
import SpiritCard from './components/SpiritCard';
import Drink from './components/Drink';
import DrinkCard from './components/DrinkCard';
import FourOhFour from './components/FourOhFour/FourOhFour';
import './App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className = "wrapper">
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
            <Route component = {FourOhFour} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;