import React, { Component } from 'react';
import Todo from './Todo.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange( input ) {
    this.setState({
        userInput: input
      }, () => { console.log( input ) } ); 
  }

  handleClick( input ) {
    let listCopy = this.state.todoList;
    listCopy.push( input );
    this.setState( {
      todoList: listCopy,
      userInput: ''
    }, () => { console.log(listCopy) } );
  }

  render() {

    const displayTodos = this.state.todoList.map( (elm, i) => {
      return (
        <Todo key={i} todos={ elm } />
      )
    } );

    return (
      <div className="App">
        <div className="App-header" >
          <div className="App-intro" >
            <h1>My Todo List</h1>
          </div>
        </div>
        <div className="container">
        <div className="input wrapper">
          <input 
            size={ "45" }
            type={ "text" } 
            maxLength={ 20 }
            value={ this.state.userInput } 
            onChange={ (e) => { this.handleChange( e.target.value ) } }
            placeholder={ "Add todo" } />
          <button onClick={ () => { this.handleClick( this.state.userInput ) } } >Add</button>
          { displayTodos }
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
