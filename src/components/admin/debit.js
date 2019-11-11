    import React, { Component } from 'react'
    import axiosQueries from '../queries/index';
    import axios from 'axios';
    import SideBar from './sidebar';
    
    class deposit extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [],
                usersCount: '',
                BtnText: 'Update deposit',
                BtnDis: false,
                name: '',
                deposit: '',
                id: this.props.match.params.id,
            };
        };

        async componentDidMount() {
            let allUsers = await axiosQueries.Get('users');

            this.setState({
                users: allUsers.data,
                usersCount: allUsers.data.length
            });
        }

        editDeposit = (e) => {
            e.preventDefault()
            this.setState({
                BtnText: 'Processing.....',
                BtnDis: true
            });
    
            let body = {
                deposit: this.state.deposit,
                name: this.state.name
            }
            const { id } = this.state;
    
            let editDeposit = new FormData();
    
            editDeposit.append('deposit', this.state.deposit);
            // editDeposit.append('name', this.state.name)
    
            axios.patch(`deposit/5dbc2d1310229b34c46d01a2`, body)
                .then(res => {
                    if (res.status === 201) {
                        this.setState({
                            BtnText: 'Update deposit',
                            BtnDis: false
                        });
                    }
                    // window.location.reload();
                    alert('Updated')
                })
                .catch(e => {
                    alert('Error editing deposit')
                    this.setState({
                        BtnText: 'Update deposit',
                        BtnDis: false
                    });
                });
        }
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }

        getUser() {
            return this.state.users.map(persons => {
                return (
                    <option key={persons._id} value={persons.fullname}>{persons.fullname}</option>
                )
            })
        }

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
                                        <h3 className="box-title">deposit User Account</h3>
                                        <form name="credit" className="form-horizontal" action="" method="post">
                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">deposit User</label>
                                                <div className="col-sm-9">
                                                        <select name="user" className="form-control ">
                                                            {this.getUser()}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Amount</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" value={this.state.deposit} onChange={this.handleChange} name="deposit" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                    <button type="submit" onClick={this.editDeposit} disabled={this.state.BtnDis} name="submit" className="button-box btn btn-info" >{this.state.BtnText}</button>
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

    export default deposit;