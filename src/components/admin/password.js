import React, { Component } from 'react'
import SideBar from './sidebar';
class Password extends Component {
render() {
  return (
    <div>
      
  <div id="wrapper">
      <SideBar />
        <div id="page-wrapper">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-sm-6 col-xs-12">
                        <h4 className="page-title">Total Activated Accounts <span className="label label-danger">{`5`}</span></h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="panel panel-default block1">
                                    <div className="panel-heading">Change admin password</div>
                                    <form className="form-horizontal"name="password" method="post" action="">
                                      <input type="hidden" name="up" value="1" />
                                      <input name="id" type="hidden" value="" />
                                    <div className="panel-wrapper collapse in">
                                        <div className="panel-body">
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label">Password</label>
                                                <div className="col-6">
                                                    <input name="pass" className="form-control" type="password" placeholder="Enter new password"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label">Confirm Password</label>
                                                <div className="col-6">
                                                    <input name="cpass" className="form-control" type="password" placeholder="Confirm new password"/>
                                                </div>
                                            </div>
                          <button type="submit" name="submit" className="button-box btn btn-success" style={{ padding: '10px 30px' }}>Continue </button>
                                        </div>
                                        <div className="panel-footer">  </div>
                                    </div>
                                  </form>
                                </div>
                      </div>
                </div>
            </div>
            </div>
            <footer className="footer text-center"> MooncuPays &copy; 2019  </footer>
        </div>
      </div>
    </div>
  )
}
}

export default Password