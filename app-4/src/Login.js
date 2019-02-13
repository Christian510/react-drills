import React, { Component } from 'react';
// import { Button } from 'button';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUser(name) {
        this.setState({
            userName: name
        });
    }
    handlePassword(pass) {
        this.setState({
            password: pass
        });
    }
    handleLogin(event) {
        alert("Username: " + this.state.userName + " Password: " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={ (e) => this.handleUser(e.target.value) }
                    placeholder="Name" />
                <input
                        type="password"
                        onChange={ (e) => this.handlePassword(e.target.value) }
                        placeholder="Password" />

                <button onClick={ this.handleLogin }>Login</button>
            </div>

                );
              }
        }

export default Login;