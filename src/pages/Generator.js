import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import Password from './Passwords';

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      website: '',
      list: [],
      clicked: 0,
    };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  componentDidMount() {
    axios.get('https://password-db.herokuapp.com/getInfo')
      .then(received => {
        const list = received.data.data;
        this.setState({ list: list })
        console.log(this.state.list);
      })
      .catch(err => {
        console.log(err, 'Did not receive list');
      });
  };

  handleGenerate() {
    const randomPassword = Math.floor(Math.random() * (999999 - 111111) + 111111);
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const symbols = ['.', '!', '@', '#', '&'];
    const array1 = [];
    const array2 = [];
    const random = () => {
      const chooseRandom = Math.floor(Math.random() * (7 - 0) + 0);
      return chooseRandom;
    }
    while (array1.length !== 5) {
      array1.push(letters[random()]);
    }
    while (array2.length !== 4) {
      if (random() <= symbols.length - 1) {
        array2.push(symbols[random()]);
      }
    }
    const combineArray = array2.concat(array1).join('').toString();
    const completedPassword = randomPassword + combineArray;
    this.setState({ password: completedPassword });
  };

  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value});
  };

  handleSubmit(e) {
    const input = this.state;
    e.preventDefault();
    axios.post('https://password-db.herokuapp.com/sendInfo', { username: input.username, password: input.password, website: input.website })
      .then(received => {
        console.log(received.data.direction);
      })
      .catch(err => {
        console.log(err, 'I have received an error');
      })
      //https://password-db.herokuapp.com
  };

  handleShowPassword(e) {
    this.setState({ clicked: 1 });
    if (this.state.clicked === 1) {
      this.setState({ clicked: 0 });
    }
    console.log(this.state.clicked);
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/"> Back </Link>
          <div className="centered">
            <form className="body" onSubmit={ this.handleSubmit }>
              <input placeholder="Website" type="text" name="website" value={ this.state.website } onChange={ this.handleChange }/>
              <input placeholder="Username" type="input" name="username" value={ this.state.username } onChange={ this.handleChange }/>
              <input placeholder="Tap to Generate Password" name="password" type="text" value={ this.state.password } onChange={ this.handleChange } onClick={ this.handleGenerate }/>
              <input type="submit" value="Save"/>
            </form>
            { this.state.clicked === 0 ? <button onClick={ this.handleShowPassword }> Show Password </button> : <button onClick={ this.handleShowPassword }> Hide Password </button>  }
          </div>
            { this.state.clicked === 1 ? <Password/> : null }
        </div>
      </div>
    )
  }
}

export default Generator;
