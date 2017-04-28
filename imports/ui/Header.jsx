import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

export default class Header extends Component {
  render(){
    return (
      <div className="_header">
        <div className="half hang-left text-left">
          <h1> Welcome </h1>
        </div>

        <Login />

        

      </div>
    )
  }
}

class Login extends Component {
  render() {
    return (
      <div className="quart hang-right text-right">
        <p> Login </p>
      </div>
    );
  }
}
