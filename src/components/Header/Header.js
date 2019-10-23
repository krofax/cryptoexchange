    import React, { Component } from 'react'

    export default class Header extends Component {
    render() {
        return (
        <div>
        <div className="navbar-area">
            <div className="luvion-responsive-nav">
                <div className="container">
                    <div className="luvion-responsive-menu">
                        <div className="logo">
                            <a href="index-2.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                                <img src="assets/img/black-logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index-2.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                            <img src="assets/img/black-logo.png" alt="logo"/>
                        </a>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="/" className="nav-link">Home</a>
                                </li>
                            </ul>
                            <div className="others-options">
                                <a href="login.html" className="login-btn"><i className="flaticon-user"></i> Log In</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
                </div>
            </div>
        )
    }
    }
