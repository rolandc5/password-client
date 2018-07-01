import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class Password extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3030/getInfo')
      .then(received => {
        const list = received.data.data;
        this.setState({ list: list })
        console.log(this.state.list);
      })
      .catch(err => {
        console.log(err, 'Did not receive list');
      });
  }

  render() {
    return (
      <div>
        <Link to="/"> Back </Link>
        <div>
          { this.state.list.map((value, i) => {
              return (
                  <div key={i}>
                    <div>
                      { value.website }
                    </div>
                    <div>
                      { value.username }
                    </div>
                    <div>
                      { value.password }
                    </div>
                  </div>
              )
          })}
        </div>
      </div>
    )
  }
}

export default Password;
