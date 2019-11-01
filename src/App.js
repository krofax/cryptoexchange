import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';


import AuthContext from './components/Context/auth-token';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Admin from './components/admin/index';
import AdminLogin from './components/admin/login';
import Debit from './components/admin/debit';
import totalAccount from './components/admin/accounts';
import Password from './components/admin/password';
import Logout from './components/admin/logout';
import Dashboard from './components/users/dashboard';
import Profile from './components/users/profile';
import UserDeposit from './components/users/deposit';
import SendMoney from './components/users/send';
import WithdrawMoney from './components/users/withdraw';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        token: null,
        user: null,
        expiresIn: null
    };
}

  login = (token, user) => {
    this.setState({token: token, user: user })
  
  }
  logout = () => {
    this.setState({token: null, user: null})
  }

  render() {
    return (
      <AuthContext.Provider value={{
        token: this.state.token,
        user: this.state.user,
        login: this.login,
        logout: this.logout
      }}>
      <React.Fragment>
        <Router>
            <Switch>
              {/* {this.state.token && (
                <Redirect to="/dashboard" />
              )} */}
              <Route path="/" component={Home} exact></Route>
              <Route path="/login" component={Login} exact></Route>
              <Route path="/register" component={Register} exact></Route>
              <Route path="/admin" component={Admin} exact></Route>
              <Route path="/admin-login" component={AdminLogin} exact></Route>
              <Route path="/debit" component={Debit} exact></Route>
              <Route path="/accounts" component={totalAccount} exact></Route>
              <Route path="/password" component={Password} exact > </Route>
              <Route path="/logout" component={Logout} exact > </Route>
              <Route path="/dashboard" component={Dashboard} exact > </Route>
              <Route path="/user-profile" component={Profile} exact > </Route>
              <Route path="/user-deposit" component={UserDeposit} exact > </Route>
              <Route path="/send-money" component={SendMoney} exact > </Route>
              <Route path="/user-withdraw" component={WithdrawMoney} exact > </Route>
              
              <Route component={Home}></Route>
            </Switch>
          </Router>
      </React.Fragment>
    </AuthContext.Provider>
    );
  }
  
}

export default App;
