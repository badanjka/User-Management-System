import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./Login.css"
import apiUrl from  '../../config';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    loginState = (event, field) => {
        this.setState({
            [field]: event.target.value,       
        })
    }

    postData = () => {
        fetch(apiUrl + "login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(results => results.json())
            .then(response => this.props.loginData(response))
    }

    render() {
        return (
            <>
            <div className="loginInfo">
                                        Username: <br></br>
                                        dev@dev.com <br></br>
                                        Password:<br></br>
                                        developer
            </div>  
            <div id="loginForm">
                {this.props.token && <Redirect from="/" to="/admin"></Redirect>}
                <p>Username:</p>
                <input type="text" onChange={e => this.loginState(e, "email")}></input>
                <p>Password:</p>
                <input type="password" onChange={e => this.loginState(e, "password")}></input>
                <br></br>
                <button className="loginButton" onClick={this.postData}>Login</button>
            </div>
            </>
        );
    }
}

export { Login };