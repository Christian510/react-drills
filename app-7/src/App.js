import React, { Component } from 'react';
import NewTask from './NewTask.js';
import List from './List.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-intro">
            Make Your Todo List
          </h1>
        </div>
          <NewTask />

          {/* List component displays the list of items. */}

      </div>
    );
  }
}

export default App;
