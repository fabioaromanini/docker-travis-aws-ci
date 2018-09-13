import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">@fabioaromanini</h1>
        </header>
        <p className="App-intro">
          CI with Travis, Docker and AWS: aced :)
        </p>
      </div>
    );
  }
}

export default App;
