import React, { Component } from 'react';
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
        this.setState({ list: list });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              { this.state.list.length === 0 ? <div> Loading </div>: this.state.list.map((value, i) => {
                  return (
                    <div key={i}>
                      <div className="line">
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
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Password;
