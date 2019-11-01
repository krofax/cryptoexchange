import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
// import AuthContext from '../Context/auth-token';
class SideBar extends Component {
  render() {
    return (
      // <AuthContext.Consumer >

        <aside className="col-lg-3 sidebar">
          
          <div className="bg-light shadow-sm text-center  mb-4">
              <div className="Profile-menu">
                  <ul className="nav secondary-nav">
                      <li className="nav-item active"><NavLink className="nav-link " to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/user-profile"><i className="fab fa-autoprefixer"></i> Account</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/cards"><i className="fas fa-university"></i> Cards & Bank Accounts</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/user-deposit"><i className="fas fa-plus"></i> Deposit Money</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/send-money"><i className="far fa-paper-plane"></i> Send Money</NavLink></li>
                      <li className="nav-item"><NavLink className="nav-link" to="/user-withdraw"><i className="fas fa-wallet"></i> Withdraw Money</NavLink></li>
                      {/* <li className="nav-item"><NavLink className="nav-link" to="/history"><i className="fas fa-list-ul"></i>Transaction</NavLink></li> */}
                  </ul>
              </div>
          </div>
      </aside>
      // </AuthContext.Consumer>
    )
  }
}

export default SideBar;