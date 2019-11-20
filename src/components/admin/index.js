    import React, { Component } from 'react'
    import axiosQueries from '../queries/index';
    import axios from 'axios';
    
    import SideBar from './sidebar';

    class Admin extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [],
                usersCount: '',
                BtnText: 'Update Balance',
                BtnDis: false,
                name: '',
                balance: ''
            };
        };

        async componentDidMount() {
            let allUsers = await axiosQueries.Get('users');

            this.setState({
                users: allUsers.data,
                usersCount: allUsers.data.length
            });
        }

        editBalance = (e) => {
            e.preventDefault()
            this.setState({
                BtnText: 'Processing.....',
                BtnDis: true
            });
    
            let id = this.props.match.params.id;
    
            let body = {
                balance: this.state.balance,
            }
    
            let editBalance = new FormData();
    
            editBalance.append('balance', this.state.balance);
    
            axios.patch(`balance/${id}`, body)
                .then(res => {
                    if (res.status === 201) {
                        this.setState({
                            BtnText: 'Update Balance',
                            BtnDis: false
                        });
                    }
                    //window.location.reload();
                    alert('Updated')
                })
                .catch(e => {
                    alert('Error editing balance')
                    this.setState({
                        BtnText: 'Update Balance',
                        BtnDis: false
                    });
                });
        }
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }

        // getUser() {
        //     return this.state.users.map(persons => {
        //         return (
        //             <option key={persons._id} value={persons.fullname}>{persons.fullname}</option>
        //         )
        //     })
        // }

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
                                        <form className="form-horizontal" onSubmit={this.editBalance}>
                                            {/* <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Credit User</label>
                                                <div className="col-sm-9">
                                                    <select name="name" value={this.state.name} onChange={this.handleChange} className="form-control ">
                                                        {this.getUser()}
                                                    </select>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Fullname</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <label className="col-sm-3 control-label col-form-label">Amount</label>
                                                <div className="col-sm-9">
                                                <div className="input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" value={this.state.balance} onChange={this.handleChange} name="balance" className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group m-b-0">
                                                <div className="offset-sm-3 col-sm-9">
                                                        <button type="submit" disabled={this.state.BtnDis} className="button-box btn btn-info" >{this.state.BtnText}</button>
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
