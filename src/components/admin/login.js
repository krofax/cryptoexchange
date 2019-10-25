    import React, { Component } from 'react'

    class AdminLogin extends Component {
    render() {
        return (
            <div>
                <form className="well form-horizontal" action="" method="post">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" className="form-control" required="" name="username" placeholder="Enter Username"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-3">
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" required="" name="password" placeholder="Enter your password"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="col-md-4 control-label"></label>
                                <div className="col-md-12  text-center"><br/>
                                    <button type="submit" name="submit" className="btn btn-warning" style={{ padding: '10px 30px' }}> LOGIN <span className="glyphicon glyphicon-send"></span></button>
                                </div>
                                </div>
                                
                            </div>
                        <div className="col-md-4"></div>
                    </div>
                </form>

            </div>
        )
    }
    }

export default AdminLogin;


        