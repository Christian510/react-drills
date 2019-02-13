import React, { Component } from 'react';
import pic from './aboutPicWeb.jpg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      climbingAreas: [
        "Smith Rock",
        "Yosemite",
        "Joshua Tree",
        "City of Rocks",
        "Blogett Canyon"
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter){
    this.setState = {
      
    }
  }

  render() {

    const listClimbingAreas = this.state.climbingAreas.map( (elm, i) => {
      return ( 
        <p key={i} >{elm}</p>
      )
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={pic} width="125" alt="logo" />
          <h2>I Love Climbing!</h2>
        </div>
        <div className="container" >
          <div className="wrapper" >
            <h2>List of Awesome Climbing Areas</h2>
            {listClimbingAreas}
          </div>
        </div>
      </div>
    );
  }
}



export default App;
