import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <aside className="col-lg-3 sidebar">
                            
                            <div className="bg-light shadow-sm text-center  mb-4">
                                <div className="Profile-menu">
                                    <ul className="nav secondary-nav">
                                        <li className="nav-item active"><a className="nav-link " href="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link" href="profile"><i className="fab fa-autoprefixer"></i> Account</a></li>
                                        <li className="nav-item"><a className="nav-link" href="profile-cards-and-bank-accounts.html"><i className="fas fa-university"></i> Cards & Bank Accounts</a></li>
                                        <li className="nav-item"><a className="nav-link" href="deposit-money.html"><i className="fas fa-plus"></i> Deposit Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="send-money.html"><i className="far fa-paper-plane"></i> Send Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="request-money.html"><i className="fas fa-piggy-bank"></i> Request Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="withdraw-money.html"><i className="fas fa-wallet"></i> Withdarw Money</a></li>
                                        <li className="nav-item"><a className="nav-link" href="transactions.html"><i className="fas fa-list-ul"></i>Transaction</a></li>
                                        <li className="nav-item"><a className="nav-link" href="profile-notifications.html"><i className="fas fa-cog"></i>Setting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
    )
  }
}

export default SideBar;