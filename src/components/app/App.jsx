/* eslint-disable max-len */
import React, { Component } from 'react';
import FuturamaCharacters from '../../containers/FuturamaCharacters';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import FuturamaDetail from '../../containers/FuturamaDetails';

class App extends Component {
  render() {

    return (
      <Router>

        <Switch>

          <Route path="/" exact={true}
            render={routerProps => (
              <FuturamaCharacters {...routerProps} />
            )}
          />

          <Route path="/character/:character" exact={true}
            render={routerProps => (
              <FuturamaDetail {...routerProps} />
            )}
          />


          <Redirect to="/" />

        </Switch>
      </Router>
    );
  }


}

export default App;




