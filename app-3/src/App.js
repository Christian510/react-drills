import React, { Component } from 'react';
import pic from './aboutPicWeb.jpg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      filterItems: "",
      climbingAreas: [
        "smith sock",
        "yosemite",
        "granite hill",
        "joshua tree",
        "city of rocks",
        "blogett canyon",
        "black canyon",
        "abaraski"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
     this.setState( {
       filterItems: filter
     });
  }

  render() {
    let climbingAreasToDisplay = this.state.climbingAreas.filter((elm, i) => {
      return elm.includes(this.state.filterItems);
    }).map(( elm, i ) => {
     return <p key = {i} > {elm} </p>
    });

    return (
      <div className="App">
        <header className="App-header">
          <div>
          <img src={pic} width="125" alt="logo" />
          </div>
        </header>
        <div>
          <label > Select a Climbing Area</label>
          <input type="text" onChange={ (e) => this.handleChange(e.target.value) } />
        </div>
        <div>
          <h2>Climbing Area List</h2>
          <div>
            { climbingAreasToDisplay }
          </div>
        </div>
         
      </div>
    );
  }
}

export default App;
