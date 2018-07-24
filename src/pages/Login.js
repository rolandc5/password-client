import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      direction: '',
      received: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    axios.post('https://password-db.herokuapp.com/login', { username, password })
      .then(response => {
        this.setState({ 
          direction: response.data.direction,
        })
        if (this.state.direction === 'Success') {
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('data', response.data.data);
          window.location = '/';
        }
      })
      .catch(error => {
        this.setState({ 
          direction: error.response.data.direction
        });
      })
  }

  render() {
    return (
      <div className="centered">
        <div>
          <div>
            <h1> Password Generator </h1>
          </div>
          <div>
            <form onSubmit={ this.handleSubmit }>
              <input
                placeholder="Username"
                name="username"
                type="text"
                onChange={ this.handleChange }
              />
              <input 
                placeholder="Password"
                name="password"
                type="password"
                onChange={ this.handleChange }
              />
              <button onClick={ this.handleSubmit }> Login </button>
            </form>
          </div>
          { this.state.direction === 'Failed' ? <div> Failed to login </div> : null }
        </div>
      </div>
    )
  }
}

export default Login;
