import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';

class App extends Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
