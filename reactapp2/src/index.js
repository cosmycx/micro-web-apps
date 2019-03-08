import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from "react-router-dom"

import About from './components/About'
import Topics from './components/Topics'


ReactDOM.render(
  <Router basename="/reactapp2">
  <div>

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
          <li className="nav-item">
            <a className="nav-link" href="/reactapp1">Search</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/reactapp2">Product</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/vueapp">Cart</a>
            </li>
        </ul>
      </div>
    </nav>


    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
</Router>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
