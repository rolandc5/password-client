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
    axios.get('https://password-db.herokuapp.com/getInfo')
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
        <div className="passwordList">
          { this.state.list.map((value, i) => {
              return (
                  <div key={i}>
                    <div>
                      { i + 1}
                    </div>
                    <div>
                      Website:
                      { value.website }
                    </div>
                    <div>
                      Username:
                      { value.username }
                    </div>
                    <div>
                      Password:
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
