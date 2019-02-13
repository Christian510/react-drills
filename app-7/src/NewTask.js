
import React, { Component } from 'react';


class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            listItems: [],
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

    handleButton( input ) {
        let listCopy = this.state.listItems;
        listCopy.push(input);
        this.setState( {
            listItems: listCopy,
            userInput: ""
        }, () => { console.log(listCopy) } );
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
                    <button 
                    onClick={ () => { this.handleButton( this.state.userInput ) } }>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTask;