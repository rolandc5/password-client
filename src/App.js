import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import * as Pages from './pages/index'

class App extends Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={ Pages.Login }/>
          <div>
            <Route path="/blob/generator" component={ Pages.Generator }/>
            <Route path="/blob/generator/passwords" component={ Pages.Password }/>
          </div>
      </div>
    )
  }
}

export default App;
