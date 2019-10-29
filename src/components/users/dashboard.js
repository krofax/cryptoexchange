import React, { Component } from 'react'

import SideBar from './sidebar';

class Dashboard extends Component {
render() {
    return (
        <div id="main-wrapper">
            <header class="header02">
                <div class="header-main">
                    <div class="container d-flex align-items-center">
                        <a href="/">
                            <img src="assets/img/black-logo.png" alt="logo"/>
                        </a>
                        <nav class="primary-menu ml-auto">
                            <a id="mobile-menu-toggler" href="#"><i class="fas fa-bars"></i></a>
                            <ul>
                                <li class="current-menu-item has-menu-child"><a href="#">Home</a>
                                    
                                </li>
                                <li class="current-menu-item"><a href="dashboard.html">Dashboard</a></li>
                                
                                
                                <li class="has-menu-child pro-menu-drop">
                                    <a href="#">
                                        <div class="header-pro-thumb">
                                            <img class="rounded-circle" src="assets/img/profile.jpg" alt="down"/>
                                        </div> Jhone Due <i class="fas fa-chevron-down"></i>
                                    </a>
                                    <ul class="dropdown-menu-md sub-menu profile-drop">
                                        <li class="dropdown-header">
                                            <div>
                                                <h5 class="hidden-xs m-b-0 text-primary text-ellipsis">Jhon Due</h5>
                                                <div class="small text-muted"><span>Membership ID P14362606</span></div>
                                            </div>
                                        </li>
                                        <li><hr class="mx-n3 mt-0"/></li>
                                        <li class="nav__create-new-profile-link">
                                            <a href="profile.html">
                                                <span>View personal profile</span>
                                            </a>
                                        </li>
                                        <li class="divider"></li>
                                        <li class="nav__dropdown-menu-items">
                                            <a href="profile-notifications.html">
                                                <i class="icon icon-setting"></i>
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li class="nav__dropdown-menu-items">
                                            <a href="#"><i class="icon icon-logout"></i><span>Logout</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </header>
            <div id="content" class="py-4">
                <div class="container">
                    <div class="row">
                        <SideBar />
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-12">
                                    
                                    <div class="bg-light shadow-sm text-center mb-3">
                                        <div class="d-flex admin-heading pr-3">
                                            <span class="mr-auto"><h3 class="text-9 font-weight-400"><i class="fas fa-wallet"></i> Available Balance</h3></span>
                                            <span class="ml-auto"><h3 class="text-9 font-weight-400">$3641.00</h3></span>
                                        </div>
                                        <div class="pb-3 pl-3 pr-3 pt-0">
                                            <hr class="mx-n3 mt-0"/>
                                            <div class="d-flex">
                                                <a href="#" class="btn-link mr-auto">Send</a>
                                                <a href="#" class="btn-link ml-auto">Withdraw</a>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="bg-light shadow-sm rounded profile-content">
                                <h3 class="text-5 font-weight-700 d-flex admin-heading">Recent Activity</h3>

                                <div class="transaction-title py-2 px-4">
                                    <div class="row">
                                        <div class="col-2 col-sm-1 text-center"><span class="">Date</span></div>
                                        <div class="col col-sm-7">Description</div>
                                        <div class="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                                        <div class="col-3 col-sm-2 text-right">Amount</div>
                                    </div>
                                </div>
                                
                                <div class="transaction-list">
                                    <div class="transaction-item px-4 py-3" data-toggle="modal"
                                        data-target="#transaction-detail">
                                        <div class="row align-items-center flex-row">
                                            <div class="col-2 col-sm-1 text-center pay-date">
                                                <span class=" text-4 font-weight-300">15</span>
                                                <span class="text-1 font-weight-300 text-uppercase pay-month">APR</span></div>
                                            <div class="col col-sm-7">
                                                <span class="text-4">Dutch - </span>
                                                <span class="text-muted">Withdraw By Bank</span></div>
                                            <div class="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span class="text-warning" data-toggle="tooltip"
                                                    data-original-title="In Progress"><i class="fas fa-ellipsis-h"></i></span>
                                            </div>
                                            <div class="col-3 col-sm-2 text-right text-4">
                                                <span class="text-nowrap">- $562</span>
                                                <span class="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="transaction-detail" class="modal fade" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered transaction-details" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div class="row no-gutters">
                                                    <div class="col-sm-12 bg-primary rounded-left">
                                                        <div class="row pl-5  pr-5">
                                                            <div class="col-md-6 align-items-left">
                                                                <div class="text-17 text-white my-3"><i class="fas fa-building"></i>
                                                                </div>
                                                                <h3 class="text-4 text-white font-weight-400 my-3">Upwork Pty
                                                                    Ltd</h3>
                                                            </div>
                                                            <div class="col-md-6 text-right  mt-5">
                                                                <div class="text-8 font-weight-500 text-white">$999.20</div>
                                                                <p class="text-white">15 March 2019</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-sm-12">
                                                        <h5 class="text-5 font-weight-400 m-3">Transaction Details
                                                            <button type="button" class="close font-weight-400"
                                                                    data-dismiss="modal" aria-label="Close"><span
                                                                    aria-hidden="true">&times;</span></button>
                                                        </h5>
                                                        <hr/>
                                                        <div class="px-3">
                                                            <ul class="list-unstyled">
                                                                <li class="mb-2">Payment Amount <span
                                                                        class="float-right text-3">$562.00</span></li>
                                                                <li class="mb-2">Fee <span
                                                                        class="float-right text-3">-$4.80</span></li>
                                                            </ul>
                                                            <hr class="mb-2"/>
                                                            <p class="d-flex align-items-center font-weight-500 mb-4">Total
                                                                Amount <span class="text-3 ml-auto">$557.20</span></p>
                                                            <ul class="list-unstyled">
                                                                <li class="font-weight-500">Paid By:</li>
                                                                <li class="text-muted">Upwork Pty Ltd</li>
                                                            </ul>
                                                            <ul class="list-unstyled">
                                                                <li class="font-weight-500">Transaction ID:</li>
                                                                <li class="text-muted">26566689645685976589</li>
                                                            </ul>
                                                            <ul class="list-unstyled">
                                                                <li class="font-weight-500">Description:</li>
                                                                <li class="text-muted">Upwork March 2019 Member Payment</li>
                                                            </ul>
                                                            <ul class="list-unstyled">
                                                                <li class="font-weight-500">Status:</li>
                                                                <li class="text-muted">Completed</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="text-center mt-3 py-4"><a href="transactions.html" class="btn-link text-3">View all<i class="fas fa-chevron-right text-2 ml-2"></i></a> <br/></div>
                                

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>                
        )
    }
}


export default Dashboard