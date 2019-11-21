import React, { Component } from 'react'
import axiosQueries from '../queries/index';
import SideBar from './sidebar';
import Header from './header';
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            data: [],
            amount: 2
        };
    }

    async componentDidMount() {
        let token = localStorage.getItem('jwtToken')
        let users = await axiosQueries.Get('users', token);
        let userdata = JSON.parse(localStorage.getItem('usersDetails'));

        this.setState({
            data: Object.values(userdata),
            user: users
        })
        
        console.log('balance', this.state.user)
    }

    getAmount = () => {
        const { data } = this.state;
            return (
                <span className="ml-auto"><h3 className="text-9 font-weight-400">${data[0]}</h3></span>
            )
    }

render() {
    return (
        <div id="main-wrapper">
            <Header />
            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
                        <SideBar />
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    
                                    <div className="bg-light shadow-sm text-center mb-3">
                                        <div className="d-flex admin-heading pr-3">
                                            <span className="mr-auto"><h3 className="text-9 font-weight-400"><i className="fas fa-wallet"></i> Available Balance</h3></span>
                                            {this.getAmount()}
                                        </div>
                                        <div className="pb-3 pl-3 pr-3 pt-0">
                                            <hr className="mx-n3 mt-0"/>
                                            <div className="d-flex">
                                                <a href="/" className="btn-link mr-auto">Send</a>
                                                <a href="/" className="btn-link ml-auto">Withdraw</a>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="bg-light shadow-sm rounded profile-content">
                                <h3 className="text-5 font-weight-700 d-flex admin-heading">Recent Activity</h3>

                                <div className="transaction-title py-2 px-4">
                                    <div className="row">
                                        <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                                        <div className="col col-sm-7">Description</div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                                        <div className="col-3 col-sm-2 text-right">Amount</div>
                                    </div>
                                </div>
                                
                                <div className="transaction-list">
                                    <div className="transaction-item px-4 py-3" data-toggle="modal"
                                        data-target="#transaction-detail">
                                        <div className="row align-items-center flex-row">
                                            <div className="col-2 col-sm-1 text-center pay-date">
                                                <span className=" text-4 font-weight-300">15</span>
                                                <span className="text-1 font-weight-300 text-uppercase pay-month">APR</span></div>
                                            <div className="col col-sm-7">
                                                <span className="text-4">Dutch - </span>
                                                <span className="text-muted">Withdraw By Bank</span></div>
                                            <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                                                <span className="text-warning" data-toggle="tooltip"
                                                    data-original-title="In Progress"><i className="fas fa-ellipsis-h"></i></span>
                                            </div>
                                            <div className="col-3 col-sm-2 text-right text-4">
                                                <span className="text-nowrap">- $562</span>
                                                <span className="text-2 text-uppercase">(USD)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="row no-gutters">
                                                    <div className="col-sm-12 bg-primary rounded-left">
                                                        <div className="row pl-5  pr-5">
                                                            <div className="col-md-6 align-items-left">
                                                                <div className="text-17 text-white my-3"><i className="fas fa-building"></i>
                                                                </div>
                                                                <h3 className="text-4 text-white font-weight-400 my-3">Upwork Pty
                                                                    Ltd</h3>
                                                            </div>
                                                            <div className="col-md-6 text-right  mt-5">
                                                                <div className="text-8 font-weight-500 text-white">$999.20</div>
                                                                <p className="text-white">15 March 2019</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-sm-12">
                                                        <h5 className="text-5 font-weight-400 m-3">Transaction Details
                                                            <button type="button" className="close font-weight-400"
                                                                    data-dismiss="modal" aria-label="Close"><span
                                                                    aria-hidden="true">&times;</span></button>
                                                        </h5>
                                                        <hr/>
                                                        <div className="px-3">
                                                            <ul className="list-unstyled">
                                                                <li className="mb-2">Payment Amount <span
                                                                        className="float-right text-3">$562.00</span></li>
                                                                <li className="mb-2">Fee <span
                                                                        className="float-right text-3">-$4.80</span></li>
                                                            </ul>
                                                            <hr className="mb-2"/>
                                                            <p className="d-flex align-items-center font-weight-500 mb-4">Total
                                                                Amount <span className="text-3 ml-auto">$557.20</span></p>
                                                            <ul className="list-unstyled">
                                                                <li className="font-weight-500">Paid By:</li>
                                                                <li className="text-muted">Upwork Pty Ltd</li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="font-weight-500">Transaction ID:</li>
                                                                <li className="text-muted">26566689645685976589</li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="font-weight-500">Description:</li>
                                                                <li className="text-muted">Upwork March 2019 Member Payment</li>
                                                            </ul>
                                                            <ul className="list-unstyled">
                                                                <li className="font-weight-500">Status:</li>
                                                                <li className="text-muted">Completed</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-center mt-3 py-4"><a href="transactions.html" className="btn-link text-3">View all<i className="fas fa-chevron-right text-2 ml-2"></i></a> <br/></div>
                                

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