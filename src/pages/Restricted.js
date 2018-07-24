import React, { Component } from 'react';

class Restricted extends Component {
  render() {
    return (
      <div className="start">
        <div className="centered">
          You are not allowed HERE!!
        </div>
      </div>
    )
  }
}

export default Restricted;