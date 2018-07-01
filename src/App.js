import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import * as Pages from './pages/index'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Pages.Login }/>
        <Route path="/generator" component={ Pages.Generator }/>
        <Route path="/passwords" component={ Pages.Password }/>
      </Switch>
    )
  }
}

export default App;
