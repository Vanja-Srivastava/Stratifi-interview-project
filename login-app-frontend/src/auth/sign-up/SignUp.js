import React, { Component } from 'react';
import './SignUp.css';
import * as axios from 'axios';

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            signUpForm: {
                fullname: "",
                username: "",
                password: ""
            }
        }

        this.attemptSignUp = this.attemptSignUp.bind(this);

    }

    render() {
        return (
            <div className="signUp-form">
                <form>
                    <div class="form-group">
                        <label htmlFor="exampleInputusername1">Full Name</label>
                        <input value={this.state.signUpForm.fullname} onChange={(event) => { this.handleChange('fullname', event.target.value) }} type="text" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter Full Name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputusername1">Username</label>
                        <input value={this.state.signUpForm.username} onChange={(event) => { this.handleChange('username', event.target.value) }} type="text" class="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter Username" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input value={this.state.signUpForm.password} onChange={(event) => { this.handleChange('password', event.target.value) }} type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                    </div>

                    <button onClick={this.attemptSignUp} type="button" class="btn btn-primary float-right">Sign Up</button>
                </form>

            </div>
        )
    }

    handleChange(key, value) {

        var signUpForm = this.state.signUpForm;
        signUpForm[key] = value;

        this.setState({ signUpForm: signUpForm });

    }

    attemptSignUp() {

        // CHECK IF PASSWORD IS VALID ETC. IF VALID CALL signUp() METHOD

        this.signUp()

    }

    signUp() {

        axios(`http://localhost:8000/sign-up`, {
            method: 'POST',
            // headers: {
            //     'Content-Type' : 'application/json'
            // },
            data: JSON.stringify(this.state.signUpForm)
        })
            .then((response) => {

                console.log(response)

                var token = response.headers.token;
                localStorage.setItem('token', token);

                var responseData = response.data;

                if (responseData.status === 'Success') {
                    this.props.history.push('/login');
                } else {
                    alert(responseData.message);
                }
            })
            .catch((err) => {
                alert(err.message);
            })

    }

}
