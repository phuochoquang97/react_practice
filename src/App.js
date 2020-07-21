import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import { render } from '@testing-library/react';
import ForgotPassword from './ForgotPassword/ForgotPassword';


class App extends Component {
  state = {
    username: 'supermax'
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  render(){
    return (
      <div className="App">
        {/* <ol>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ol>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName="Max"></UserOutput> */}
        <ForgotPassword email='tokbokki@gmail.com'></ForgotPassword>
      </div>
    );
  }
}

export default App;
