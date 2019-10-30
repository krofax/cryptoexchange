import React, { Component } from 'react'

class SubHeader extends Component {
  render() {
    return (
      <div className="bg-white">
        <div className="container d-flex justify-content-center primary-menu ml-auto">
              <ul className="nav pro-sec-menu secondary-nav alternate">
                  <li className="has-menu-child nav-item active">
                      <a className="nav-link" href="/user-deposit">Deposit</a>
                      
                  </li>
                  <li className="has-menu-child nav-item">
                      <a className="nav-link" href="/user-withdraw">Withdraw</a>
                      
                  </li>
                  <li className="has-menu-child nav-item">
                      <a className="nav-link" href="/send-money">Send</a>
                      
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}

export default SubHeader;