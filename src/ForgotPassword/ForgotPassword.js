import React, { Component } from 'react';
import './ForgotPassword.css';
export class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            placeholder: 'Email'
        }
    }
    
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })

    }
    handleEmailOnFocus = (event) => {
        this.setState({
            email:'',
            placeholder: "Typing"
        })
    }
    handleEmailOnBlur=(event) => {
        this.setState({
            email:'',
            placeholder: "Email"
        })
    }

    render() {
        return (
            <div className="Forgot Password">
                <form id='fpform'>
                    <div>
                        <label id="forgotpassword">Forgot password </label>

                        <input type='email' id='email'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder={this.state.placeholder}
                            onFocus={this.handleEmailOnFocus}
                            onBlur={this.handleEmailOnBlur}></input>

                        <button type='submit' id='btnsend'>Send</button>

                        <a href="Login.html" id='linktologin'>Back to Login</a>
                    </div>
                </form>
            </div>
        )
    }
}
export default ForgotPassword