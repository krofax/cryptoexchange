import React, { Component } from 'react'

// import axiosQueries from '../queries/index';
import axios from 'axios';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            btnTxt: 'LOGIN',
            btnDis: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({btnDis: true, btnTxt: 'Login.....'})
        let adminData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('https://api-backend-mooncu.herokuapp.com/api/admin-login', adminData)
            .then(res => {
                if (res.status === 200) {
                    alert('Admin Logged in')
                    this.setState({
                        email: '',
                        password: '',
                        btnTxt: 'LOGIN',
                        btnDis: true
                    });
                    window.location.href = "/home";
                }
            })
            .catch(err => {
                alert('Invalid Login Details')
                this.setState({btnTxt: 'LOGIN', btnDis: false})
                
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <form className="well form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="container">
                            <div className="logo">
                                    <a href="/"><img src="assets/img/black-logo.png" alt="mooncu"/></a>
                            </div>
                    
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3" style={{ marginRight: '20px', marginTop: '30px' }}>
                                    <div className="form-group">
                                        <label for="username">Email</label>
                                        <input type="email" className="form-control" required="" value={this.state.email} name="email" onChange={this.handleChange} placeholder="Enter Username"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-3" style={{ marginTop: '30px' }}>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                    <input type="password" className="form-control" value={this.state.password} required="" name="password" onChange={this.handleChange} placeholder="Enter your password"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="col-md-4 control-label"></label>
                                <div className="col-md-12  text-center"><br/>
                                    <button type="submit" name="submit" className="btn btn-warning" style={{ padding: '10px 30px' }} disabled={this.state.btnDis}> {this.state.btnTxt}<span className="glyphicon glyphicon-send"></span></button>
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


        