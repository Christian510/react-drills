import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( { text: event.target.value } )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img href="https://via.placeholder.com/150" alt="logo" />
          <h2>Welcome Stuff</h2>
        </div>
        <label> Text Input Field
          <input type={"text"} maxLength="50" value={ this.state.text } onChange={ this.handleChange } />
        </label>
        <div className="text-output" >
          <h1> {this.state.text} </h1>
        </div>
        
      </div>
    );
  }
}


export default App;
