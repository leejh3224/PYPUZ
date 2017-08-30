import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import AuthContainer from './containers/AuthContainer'
import HeaderContainer from './containers/HeaderContainer'

import {
  Home 
} from './pages'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/login" component={ AuthContainer } />
              <Route render={ () => <div>404 NOT FOUND</div> }/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
