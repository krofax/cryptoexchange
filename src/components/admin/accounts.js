import React, { Component } from 'react'
import axiosQueries from '../queries/index';

import SideBar from './sidebar';
class totalAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    async componentDidMount() {
        let allUsers = await axiosQueries.get('users');
        this.setState({
            users: allUsers,
        });
        console.log('all admins', this.state.users)
    }
render() {
    return (
        <div id="wrapper">
        <SideBar/>
        <div id="page-wrapper">
            <div className="container-fluid">
                <div className="row bg-title">
                    <div className="col-sm-6 col-xs-12">
                        <h4 className="page-title">Total Activated Accounts <span className="label label-danger">{`4`}</span></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="white-box">
                            <div className="col-sm-12">
                            <h3 className="box-title">Total Number of Accounts</h3>
                            <div className="table-responsive">
                                <table className="table color-bordered-table red-bordered-table">
                                    <thead>
                                        <tr>
                                            <th>Account Number</th>
                                            <th>Account Name</th>
                                            <th>ID Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="footer text-center">  &copy; 2018</footer>
        </div>
    </div>
    )
    }
}


export default totalAccount;