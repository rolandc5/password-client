import React, { Component } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';
import './Generator.css';

const contentStyle = {
  maxWidth: "400px",
  width: "90%",
};


class Create extends Component {
  constructor() {
    super();
    this.state = {
      website: '',
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value});
  };

  handleSubmit(e) {
    axios.post('https://password-db.herokuapp.com/sendInfo', { website: this.state.website, username: this.state.username, password: this.state.password })
      .then(received => {
        console.log("hello");
        this.setState({ 
          direction: received.data.direction,
          website: received.data.data.website,
          username: received.data.data.username,
          password: received.data.data.password,
        })
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ direction: err.response.data.direction })
    })
  };

  render() {
    return (
      <Popup trigger={<button> + </button>} modal contentStyle={ contentStyle }>
        <div>
          <div className="innerBody">
            <div className="createMain">
              <input placeholder="Website" name="website" onChange={ this.handleChange }/>
              <div className="space"/>
              <input placeholder="Username" name="username" onChange={ this.handleChange }/>
              <div className="space"/>
              <input placeholder="Password" name="password" onChange={ this.handleChange }/>
              <div className="space"/>
              <button className="saveB" onClick={ this.handleSubmit }> Save </button>
            </div>
          </div>
        </div>
      </Popup>
    )
  }
}


export default Create;
