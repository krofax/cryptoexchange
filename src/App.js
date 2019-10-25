import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/admin/index';
import AdminLogin from './components/admin/login';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/register" component={Register} exact></Route>
            <Route path="/admin" component={Admin} exact></Route>
            <Route path="/admin-login" component={AdminLogin} exact></Route>
            <Route component={Home}></Route>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
