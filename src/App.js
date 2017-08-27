import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import {
  Home 
} from './pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route render={ () => <div>404 NOT FOUND</div> }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
