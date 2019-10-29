import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
      <aside class="col-lg-3 sidebar">
                            
                            <div class="bg-light shadow-sm text-center  mb-4">
                                <div class="Profile-menu">
                                    <ul class="nav secondary-nav">
                                        <li class="nav-item active"><a class="nav-link " href="dashboard.html"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                                        <li class="nav-item"><a class="nav-link" href="profile.html"><i class="fab fa-autoprefixer"></i> Account</a></li>
                                        <li class="nav-item"><a class="nav-link" href="profile-cards-and-bank-accounts.html"><i class="fas fa-university"></i> Cards & Bank Accounts</a></li>
                                        <li class="nav-item"><a class="nav-link" href="deposit-money.html"><i class="fas fa-plus"></i> Deposit Money</a></li>
                                        <li class="nav-item"><a class="nav-link" href="send-money.html"><i class="far fa-paper-plane"></i> Send Money</a></li>
                                        <li class="nav-item"><a class="nav-link" href="request-money.html"><i class="fas fa-piggy-bank"></i> Request Money</a></li>
                                        <li class="nav-item"><a class="nav-link" href="withdraw-money.html"><i class="fas fa-wallet"></i> Withdarw Money</a></li>
                                        <li class="nav-item"><a class="nav-link" href="transactions.html"><i class="fas fa-list-ul"></i>Transaction</a></li>
                                        <li class="nav-item"><a class="nav-link" href="profile-notifications.html"><i class="fas fa-cog"></i>Setting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
    )
  }
}

export default SideBar;