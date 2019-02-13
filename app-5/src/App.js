import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Image displayImage = { "https://source.unsplash.com/user/eberhardgross/800x800" } />
      </div>
    );
  }
}

export default App;
