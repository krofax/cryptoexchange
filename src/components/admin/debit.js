import React, { Component } from 'react'
import axiosQueries from '../queries/index';

import SideBar from './sidebar';

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersCount: '',
            BtnText: 'Update deposit',
            BtnDis: false,
            fullname: '',
            deposit: 0,
            userId: 2,

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
                deposit: persons.deposit,
                userId: persons._id,
                fullname: persons.fullname
            });
        }
        return null;
    });
    }

    editdeposit = (e) => {
        e.preventDefault()
        this.setState({
            BtnText: 'Processing.....',
            BtnDis: true
        });

        let body = {
            deposit: this.state.deposit,
        }

        const { userId, fullname } = this.state;

        axiosQueries.Patch(`deposit/${userId}`, body)
            .then(res => {
                this.setState({
                    BtnText: 'Update deposit',
                    BtnDis: false
                });
                //window.location.reload();
                alert(`${fullname} as been Updated successfully`)
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
                                    <h3 className="box-title">Deposit User Account</h3>
                                    <form className="form-horizontal" >

                                        <div className="form-group row">
                                            <label className="col-sm-3 control-label col-form-label">Fullname</label>
                                            <div className="col-sm-9">
                                            <div className="input-group">
                                                <input type="text" name="name" disabled value={this.state.fullname} onChange={this.handleChange}className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                
                                            </div>
                                            </div>
                                            </div>
                                            
                                        <div className="form-group row">
                                            <label className="col-sm-3 control-label col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                            <div className="input-group">
                                                <span className="input-group-addon">$</span>
                                                <input type="text" name="deposit" value={this.state.deposit} onChange={this.handleChange}className="form-control"  aria-label="Amount (to the nearest dollar)"/>
                                                <span className="input-group-addon">.00</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="form-group m-b-0">
                                            <div className="offset-sm-3 col-sm-9">
                                                    <button onClick={this.editdeposit} type="submit" disabled={this.state.BtnDis} className="button-box btn btn-info" >{this.state.BtnText}</button>
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

export default Deposit;
