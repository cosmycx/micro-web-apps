import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <a className="navbar-brand" href="/">Great-Micro-App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home/Login<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/reactapp1">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reactapp2">Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/vueapp">Cart</a>
                  </li>
              </ul>
            </div>
          </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
