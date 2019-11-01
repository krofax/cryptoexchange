import React, { Component } from 'react'

import Header from './header';
import SideBar from './sidebar';
import SubHeader from './subheader';

class SendMoney extends Component {
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
                        <div className="bg-light shadow-md rounded p-3 p-sm-4 mb-8 mt-8 form-box">
                        <h3 className="text-5 msg-header">Personal Details</h3>
                                <p className="text-4 text-center">Send your money on anytime, anywhere in the world.</p>
                                
                                <form id="form-send-money" method="post">
                                    <div className="form-group">
                                        <label htmlFor="emailID">Recipient</label>
                                        <input type="text" value="" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Enter Email Address"/>
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="youSend">You Send</label>
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
                                <div className="form-group">
                                    <label htmlFor="youSend">Recipient Gets</label>
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
                                <div className="form-group">
                                    <label htmlFor="paymentMethod">Payment Method</label>
                                    <select id="cardType" className="custom-select" required="">
                                        <option value="">Select Payment Method</option>
                                        <option>Credit or Debit Cards</option>
                                        <option>Bank Accounts</option>
                                    </select>
                                </div>
                                <p className="text-muted charge-area mt-4">Transactions fees <span
                                        className="float-right d-flex align-items-center"><del>1.00 USD</del> <span
                                        className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2 free-charge">Free</span></span>
                                </p>
                                <hr/>
                                <p className="font-weight-500">You'll deposit <span
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

export default SendMoney