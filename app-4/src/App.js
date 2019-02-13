import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <h2>React Forms</h2>
        </div>
        <Login />
      </div>
    );
  }
}

export default App;


