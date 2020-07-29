import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get ready to build something amazing! Yes YOU</h1>

        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
