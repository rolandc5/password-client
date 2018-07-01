import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Password Generator </h1>
        </div>
        <Link to="/generator"> Generator </Link>
        <Link to="/passwords"> Passwords </Link>
      </div>
    )
  }
}

export default Login;
