import React, { Component } from 'react';
import NewTask from './NewTask.js';
import List from './List.js';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        listItems: [],
    }
    this.handleTodo = this.handleTodo.bind(this);
}

  handleTodo( todo ) {
    this.setState({ 
      listItems: [ ...this.state.listItems, todo ]
     }, console.log() );
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-intro">
            Make Your Todo List
          </h1>
        </div>
        <div>
          <NewTask add={ this.state.handleTodo } />
          <List todos={ this.state.listItems } />
        </div>
      </div>
    );
  }
}

export default App;
