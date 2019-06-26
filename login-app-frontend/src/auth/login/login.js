import React, { Component } from 'react'
import './login.css';
import * as axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            loginForm: {
                username: "",
                password: ""
            }
        }

        this.attemptLogin = this.attemptLogin.bind(this);
        this.signUp = this.signUp.bind(this);

    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <div class="form-group">
                        <label htmlFor="exampleInputusername1">Username</label>
                        <input value={this.state.loginForm.username} onChange={(event) => { this.handleChange('username', event.target.value) }} type="text" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter Username" />
                        <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.loginForm.password} onChange={(event) => { this.handleChange('password', event.target.value) }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>

                    <button onClick={this.attemptLogin} type="button" class="btn btn-primary float-right">Log In</button>
                </form>

                <button onClick={this.signUp} type="button" id="sign-up-button" class="btn btn-outline-primary mt-5">Sign Up</button>

            </div>
        )
    }

    handleChange(key, value) {

        var loginForm = this.state.loginForm;
        loginForm[key] = value;

        this.setState({ loginForm: loginForm });

    }

    signUp() {
        this.props.history.push('/signUp')
    }

    attemptLogin() {

        // CHECK IF PASSWORD IS VALID ETC. IF VALID CALL login() METHOD

        this.login()

    }

    login() {

        axios(`http://localhost:8000/login`, {
            method: 'POST',
            // headers: {
            //     'Content-Type' : 'application/json'
            // },
            data: JSON.stringify(this.state.loginForm)
        })
        .then((response) => {

            console.log(response)

            var token = response.headers.token;
            localStorage.setItem('token', token);

            var responseData = response.data;
          
            if(responseData.status === 'Success') {
                this.props.history.push('/main');
            } else {
                alert(responseData.message);
            }
        })
        .catch((err) => {   
            alert(err.message);
        })

    }

}
