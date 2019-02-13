
import React, { Component } from 'react';


class NewTask extends Component {
    constructor(props) {
       super(props);
       this.state = {
           userInput: ""
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleButton = this.handleButton.bind(this);
    }

    handleChange( input ) {
        this.setState( {
            userInput: input
        }, () => { console.log( input ) } );
    } 

    handleButton() {
        this.props.add( this.state.userInput );
        this.setState( {
             userInput: ''
            } );
    }

    render() {
        return (
        <div>
            <div>
                <input 
                type={ "text" }
                value={ this.state.userInput }
                onChange={ (e) => { this.handleChange( e.target.value ) } }
                placeholder={ "Add your todo" }
                size={ 40 }
                maxLength={ 35 }
                />
            </div>
            <div>
                <button onClick={ this.handleButton }>Add</button>
            </div>
        </div>
        );
    }
}

export default NewTask;