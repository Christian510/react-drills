import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.userName});
   }

  handleSubmit(event) {
    alert("A name was submited: " + this.state.userName);
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userName} onChange={this.handleChange} placeholder="Name" />
          <input type="password" /*value={this.state.password} onChange={}*/  placeholder="Password" />
          <input type="submit" value="submit" />
        </form>
        
      </div>

    );
  }
}

export default App;


