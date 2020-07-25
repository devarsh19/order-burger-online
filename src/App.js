import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get ready to build your own burger</h1>
        <Button color="primary" variant="outlined">I'm form material UI</Button>
      </div>
    );
  }
}

export default App;
