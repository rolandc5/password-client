import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Password Generator </h1>
        </div>
        <div>
          <form>
            <input placeholder="Username"/>
            <input placeholder="Password"/>
            <Link to="/blob/generator"> Login </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
