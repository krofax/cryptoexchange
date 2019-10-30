import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <aside className="col-lg-3 sidebar">
                            
                            <div className="bg-light shadow-sm text-center  mb-4">
                                <div className="Profile-menu">
                                    <ul className="nav secondary-nav">
                                        <li className="nav-item active"><a className="nav-link " href="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/user-profile"><i className="fab fa-autoprefixer"></i> Account</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/cards"><i className="fas fa-university"></i> Cards & Bank Accounts</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/user-deposit"><i className="fas fa-plus"></i> Deposit Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/send-money"><i className="far fa-paper-plane"></i> Send Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/user-withdraw"><i className="fas fa-wallet"></i> Withdraw Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/history"><i className="fas fa-list-ul"></i>Transaction</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
    )
  }
}

export default SideBar;