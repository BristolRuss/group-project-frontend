import React from 'react';
import Header from './components/Header/Header';
import SpiritCard from './components/SpiritCard/SpiritCard';
import Drink from './components/Drink/Drink';
import DrinkCard from './components/DrinkCard/DrinkCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "wrapper">
        <Header />
        {/* <SpiritCard /> */}
        {/* <DrinkCard /> */}
        <Drink />
      </div>
    </div>
  );
}

export default App;