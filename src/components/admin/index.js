    import React, { Component } from 'react'
    import axiosQueries from '../queries/index';
    import Toast from '../toast/Toaster';
    // import axios from 'axios';
    
    import SideBar from './sidebar';

    class Admin extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [],
                usersCount: '',
                BtnText: 'Update Balance',
                BtnDis: false,
                fullname: '',
                balance: 0,
                userId: 2
            };
        };

        async componentDidMount() {
            let allUsers = await axiosQueries.Get('users');

            let id = this.props.match.params.id;

            this.setState({
                users: allUsers.data,
                usersCount: allUsers.data.length
            });

                /**find category that mathches route param id */
        this.state.users.find(persons => {
            if (persons._id === id) {
                this.setState({
                    balance: persons.balance,
                    userId: persons._id,
                    fullname: persons.fullname
                });
            }
            return null;
        });
        }

        editBalance = (e) => {
            e.preventDefault()
            this.setState({
                BtnText: 'Processing.....',
                BtnDis: true
            });
    
            let id = this.props.match.params.id;
            console.log('params id--', id)
            let body = {
                balance: this.state.balance,
            }
    
            const { userId, fullname } = this.state;
    
            axiosQueries.Patch(`balance/${userId}`, body)
                .then(res => {
                    this.setState({
                        BtnText: 'Update Balance',
                        BtnDis: false
                    });
                    //window.location.reload();
                    Toast.success(`${fullname} credit balance as been Updated`)
                })
                .catch(e => {
                    Toast.error('Error editing balance')
                    this.setState({
                        BtnText: 'Update Balance',
                        BtnDis: false
                    });
                });
        }
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }

    render() {
        return (
        <div id="wrapper">
            <SideBar/>
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
                                        <h3 className="box-title">Credit User Account</h3>
                                        <form className="form-horizontal" >

                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Amount</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <input type="text" name="fullname" disabled value={this.state.fullname} onChange={this.handleChange}className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                    
                                                </div>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Amount</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" name="balance" value={this.state.balance} onChange={this.handleChange}className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                        <button onClick={this.editBalance} type="submit" disabled={this.state.BtnDis} className="button-box btn btn-info" >{this.state.BtnText}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center"> MooncuPays 2019</footer>
            </div>
        </div>

        )
    }
}

export default Admin;
