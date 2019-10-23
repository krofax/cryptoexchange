    import React, { Component } from 'react'

    export default class Header extends Component {
    render() {
        return (
        <div>
        <div class="navbar-area">
            <div class="luvion-responsive-nav">
                <div class="container">
                    <div class="luvion-responsive-menu">
                        <div class="logo">
                            <a href="index-2.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                                <img src="assets/img/black-logo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="luvion-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index-2.html">
                            <img src="assets/img/logo.png" alt="logo"/>
                            <img src="assets/img/black-logo.png" alt="logo"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="#" class="nav-link">Home <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="index-2.html" class="nav-link active">Home One</a></li>

                                        <li class="nav-item"><a href="index-3.html" class="nav-link">Home Two</a></li>

                                        <li class="nav-item"><a href="index-4.html" class="nav-link">Home Three</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>

                                <li class="nav-item"><a href="#" class="nav-link">Features <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="features-1.html" class="nav-link">Features Style One</a></li>

                                        <li class="nav-item"><a href="features-2.html" class="nav-link">Features Style Two</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a href="#" class="nav-link">Pages <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>

                                        <li class="nav-item"><a href="#" class="nav-link">Features</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="features-1.html" class="nav-link">Features Style One</a></li>
        
                                                <li class="nav-item"><a href="features-2.html" class="nav-link">Features Style Two</a></li>
                                            </ul>
                                        </li>

                                        <li class="nav-item"><a href="team.html" class="nav-link">Team</a></li>

                                        <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>

                                        <li class="nav-item"><a href="error-404.html" class="nav-link">404 Error</a></li>

                                        <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>

                                <li class="nav-item"><a href="#" class="nav-link">Blog <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="blog-1.html" class="nav-link">Blog Grid</a></li>

                                        <li class="nav-item"><a href="blog-2.html" class="nav-link">Blog Right Sidebar</a></li>

                                        <li class="nav-item"><a href="single-blog.html" class="nav-link">Blog Details</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                            </ul>

                            <div class="others-options">
                                <a href="login.html" class="login-btn"><i class="flaticon-user"></i> Log In</a>
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
