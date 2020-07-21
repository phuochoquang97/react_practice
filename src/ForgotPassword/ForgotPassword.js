import React, { Component } from 'react';
import './ForgotPassword.css';
export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            placeholder: 'Email',
            emailError: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

    }
    handleEmailErr = () => {
        if (!this.state.email.includes('@')) {
            this.setState({
                email: 'invalid email'
            })
        }
    }

    handleEmailOnFocus = (event) => {
        this.setState({
            email: '',
            placeholder: "Typing"
        })
    }
    handleEmailOnBlur = (event) => {
        var patt = new RegExp("^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$");
        var res = patt.test(this.state.email);
        if (!res) {
            this.setState({
                email: 'invalid email'
            })
        }
    }

render() {
    return (
        <div className="Forgot Password">
            <form id='fpform'>
                <div>
                    <label id="forgotpassword">Forgot password </label>

                    <input type='email' id='email'
                        data-error='Invalid email'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder={this.state.placeholder}
                        onFocus={this.handleEmailOnFocus}
                        onBlur={this.handleEmailOnBlur}
                        ></input>

                    <button type='submit' id='btnsend'>Send</button>

                    <a href="Login.html" id='linktologin'>Back to Login</a>
                </div>
            </form>
        </div>
    )
}
}
export default ForgotPassword