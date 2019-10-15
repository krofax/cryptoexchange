import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

class App extends Component {




  render() {
    return (
        <div className="App">
          <h1> Hello wolrd </h1>
          {/* <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </Router> */}
        </div>
    );
  }
}

export default App;
