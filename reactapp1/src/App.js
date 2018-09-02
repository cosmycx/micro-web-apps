import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onclickhome = () => {
    window.location.href = '/'
  }// ./onclickhome
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Micro App 1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onclickhome}> HOME PAGE </button>
      </div>
    );
  }
}

export default App;
