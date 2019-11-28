import React, { Component } from 'react';
import Toast from '../toast/Toaster';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import jwt from 'jsonwebtoken';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            btnTxt: 'LOGIN',
            btnDis: false,
            userToken: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault()
        this.setState({btnDis: true, btnTxt: 'PROCESSING.....'})
        let userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('login', userData)
            .then(res => {
                if (res.status === 200) {
                    const token = res.data.token;
                    localStorage.setItem('jwtToken', token);
                    let info = res.data.user;
                    let userInfos = JSON.stringify(info);
                    localStorage.setItem('usersDetails', userInfos)
                    console.log('informs', info);
                    this.setState({
                        email: '',
                        password: '',
                        btnTxt: 'LOGIN',
                        btnDis: false,
                        userToken: token
                    });
                    console.log('token', this.state.userToken)
                }
                Toast.success('Logged in')
                window.location.href = "/dashboard";
                
            })
            
            .catch(err => {
                Toast.error('Invalid Login Details')
                this.setState({btnTxt: 'LOGIN', btnDis: false})
                
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <section className="login-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-image">
                                <img src="assets/img/5.png" alt="mooncu" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="login-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="login-form">
                                            <div className="logo">
                                                <NavLink to="/"><img src="assets/img/black-logo.png" alt="mooncu" /></NavLink>
                                            </div>

                                            <h3>Welcome back</h3>
                                            <p>New to Moonpayscu? <NavLink to="/register">Sign up</NavLink></p>

                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email address" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="Your password" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary" disabled={this.state.btnDis}>{this.state.btnTxt}</button>
                                        
                                                <div className="forgot-password">
                                                    <NavLink to="/forgot-password">Forgot Password?</NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;
