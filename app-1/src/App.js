import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form>
          < input onChange={this.handleChange} label="type something" type="text" />
        </form>
        <Output typing={this.state.value}/>
        {/* <p>{this.state.value}</p> */}
        {/* this works too, but I wanted to use a function for practice */}

      </div>
    );
  }
}

function Output(props){
  return <p>{props.typing}</p>
}



export default App;
