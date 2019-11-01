import React, { Component } from 'react'

import Header from './header';
import SideBar from './sidebar';
import SubHeader from './subheader';
class WithdrawMoney extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <div id="content" className="py-4">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-lg-9">
                <SubHeader />
                <h3 className="text-5 font-weight-700 d-flex admin-heading">Deposit Money</h3>
                <div className="bg-white">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 mx-auto ">
                        <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4  form-box">
                                    <div className="text-center bg-primary p-4 rounded mb-4">
                                        <h3 className="text-10 text-white font-weight-400">$2956.00</h3>
                                        <p className="text-white">Available Balance</p>
                                        <a href="/"
                                          className="btn btn-outline-light btn-sm shadow-none text-uppercase rounded-pill text-1">Withdraw
                                            Full Amount</a></div>
                                    <form id="form-send-money" method="post">
                                        <div className="form-group">
                                            <label htmlFor="withdrawto">Withdraw to</label>
                                            <select id="withdrawto" className="custom-select" required="">
                                                <option value="">HDFC Bank - XXXXXXXXXXXX-9025</option>
                                                <option>Bank A/c 2 - XXXXXX-1211</option>
                                                <option>Bank A/c 3 - XXXXXX-2011</option>
                                                <option>Bank A/c 4 - XXXXXX-2011</option>
                                            </select>
                                        </div>
                                      <div className="form-group">
                                        <label htmlFor="youSend">Amount</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                    className="input-group-text currency-icon">$</span>
                                            </div>
                                            <input type="text" className="form-control" data-bv-field="youSend"
                                                    id="youSend"
                                                    value="1,000" placeholder=""/>
                                            <div className="input-group-append">
                                            <span className="input-group-text p-0">
                                            <select id="youSendCurrency"
                                                    data-style="custom-select bg-transparent border-0"
                                                    data-container="body" data-live-search="true"
                                                    className="selectpicker form-control bg-transparent" required="">
                                                <optgroup label="Popular Currency">
                                                <option data-icon="currency-flag currency-flag-usd mr-1"
                                                        data-subtext="United States dollar"
                                                        selected="selected" value="">USD</option></optgroup>
                                            </select>
                                            </span></div>
                                        </div>
                                      </div>
                                      <p className="text-muted mt-4">Transactions fees <span
                                                className="float-right d-flex align-items-center">5.00 USD</span></p>
                                        <p className="font-weight-500">Amount to Withdraw <span
                                                className="text-3 float-right">1,000.00 USD</span></p>
                                        <button className="btn btn-default btn-center btn-block">
                                            <span className="bh"></span>
                                            <span>Continue</span>
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WithdrawMoney