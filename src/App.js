import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import * as Pages from './pages/index';

class App extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <main>
        <Switch>
          { localStorage.getItem('loggedIn') === 'true' ?  <Route exact path="/" component={ Pages.Generator }/> : <Route exact path="/" component={ Pages.Login }/> }
          <Route path="/popup" component={ Pages.Create }/>
          <Route path="/*" component={ Pages.Restricted}/>
        </Switch>
      </main>
    )
  }
}
export default App;

/*
{ localStorage.getItem('loggedIn') === 'true' ? /> : null }
*/
