import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/admin/index';
import AdminLogin from './components/admin/login';
import Debit from './components/admin/debit';
import totalAccount from './components/admin/accounts';
import Password from './components/admin/password';
import Logout from './components/admin/logout';
import User from './components/users/User';

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
            <Route path="/debit" component={Debit} exact></Route>
            <Route path="/accounts" component={totalAccount} exact></Route>
            <Route path="/password" component={Password} exact > </Route>
          <Route path="/logout" component={Logout} exact > </Route>
          <Route path="/users" component={User} exact > </Route>
            <Route component={Home}></Route>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
