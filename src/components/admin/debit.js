import React, { Component } from 'react'

import SideBar from './sidebar';

class Debit extends Component {
render() {
return (
    <div>
    
            <div id="wrapper">
            <SideBar />
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row bg-title">
                        <div className="col-sm-6 col-xs-12">
                            <h4 className="page-title">Hi admin, welcome back today.</h4>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <ol className="breadcrumb">
                            
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="white-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <h3 className="box-title">Debit User Account</h3>
                                        <form name="credit" className="form-horizontal" action="" method="post">
                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Debit User</label>
                                                <div className="col-sm-9">
                                                    <select name="user" className="form-control ">
                                                        <option value="">--Select User to Debit--</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Amount</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" name="amt" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                    <button type="submit" name="submit" className="button-box btn btn-info" >Debit Account</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center">Mooncupays &copy; 2019 </footer>
            </div>


        </div>
    </div>
)
}
}

export default Debit;