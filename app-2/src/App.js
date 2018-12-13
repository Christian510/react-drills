import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Groceries(props){
  return <h1>{props.item}</h1>
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      groceries: [
        "French Bread",
        "Cheese",
        "Red Wine",
        "Tomato Bisque"
      ]
    }
  }

  render() {
   let groceryItems = this.state.groceries.map( (element, index) => {
      return <h2>{element}</h2>;
   })
   
    return (
      <div className="App">
        { groceryItems }
      </div>
    );
  }
}



export default App;
