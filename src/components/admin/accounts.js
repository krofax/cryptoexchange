    import React, { Component } from 'react'
    import axiosQueries from '../queries/index';

    import SideBar from './sidebar';
    class totalAccount extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [],
                usersCount:''
            };
        };

        async componentDidMount() {
            let allUsers = await axiosQueries.Get('users');

            this.setState({
                users: allUsers.data,
                usersCount: allUsers.data.length
            });
            console.log('all users', this.state.users)
            console.log('all usersCount', this.state.usersCount)
        }

        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }
    render() {
    return this.state.users.map((persons, i) => {
        return (
            <div id="wrapper"  key={persons._id}>
            <SideBar/>
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row bg-title">
                        <div className="col-sm-6 col-xs-12">
                                <h4 className="page-title">Total Activated Accounts <span className="label label-danger">{this.state.usersCount}</span></h4>
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
                                                <th>Fullname</th>
                                                <th>Country</th>
                                                <th>Phone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <tr>
                                                <td>{persons.fullname}</td>
                                                <td>{persons.country}</td>
                                                <td>{persons.phone}</td>
                                            </tr>
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
    });
    }

    }


    export default totalAccount;