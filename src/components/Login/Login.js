import React, { Component } from 'react'

// import axiosQueries from '../queries/index';
import axios from 'axios';

class Login extends Component {
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
        this.setState({btnDis: true, btnTxt: 'LOADING.....'})
        let userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('login', userData)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        email: '',
                        password: '',
                        btnTxt: 'LOGIN',
                        btnDis: true
                    });
                    // window.location.href = "/users";
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
                                                <a href="/"><img src="assets/img/black-logo.png" alt="mooncu" /></a>
                                            </div>

                                            <h3>Welcome back</h3>
                                            <p>New to Moonpayscu? <a href="/register">Sign up</a></p>

                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email address" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="password" placeholder="Your password" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary" disabled={this.state.btnDis}>{this.state.btnTxt}</button>
                                        
                                                <div className="forgot-password">
                                                    <a href="/forgot-password">Forgot Password?</a>
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
