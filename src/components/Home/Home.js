import React from 'react';
import '../public/css';

import Footer from '../Footer/Footer';


class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Preloader */}
        {/* <div className="preloader">
            <div className="loader">
                <div className="shadow"></div>
                <div className="box"></div>
            </div>
        </div> */}
        {/* Preloader ends */}
        {/* Navbar starts */}
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
                                <li className="nav-item"><a href="#" className="nav-link">Home </a>
                                    
                                </li>

                                <li className="nav-item"><a href="about.html" className="nav-link">About Us</a></li>
                                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                            </ul>
                            <div className="others-options">
                                <a href="login.html" className="login-btn"><i className="flaticon-user"></i> Log In</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* Navbar ends */}
        {/* Main banner area starts */}
        <div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <h1>Have an account with the  21st Century Bank</h1>
                            <p>Get your financial needs met.</p>
                            <a href="#" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Main banner area ends */}
        {/* Feature boxes area starts */}
        <section className="featured-boxes-area">
            <div className="container">
                <div className="featured-boxes-inner">
                    <div className="row m-0">
                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-fb7756">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>

                                <h3>Less fees</h3>
                                <p>Do transactions with little or fees.</p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-facd60">
                                    <i className="flaticon-data-encryption"></i>
                                </div>

                                <h3>Fully Encrypted</h3>
                                <p>We use the highest levels of Internet Security, and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.</p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-1ac0c6">
                                    <i className="flaticon-wallet"></i>
                                </div>

                                <h3>Flexible payment system</h3>
                                <p>We offer flexible savings and withdrawal targets.</p>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>

                                <h3>Safe and Secure</h3>
                                <p>From Signup to getting your returns our processes are secured with optimum standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Feature box area ends */}
        
        {/* Section 2 starts here  */}
        <section className="services-area ptb-70 bg-f7fafd">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src="assets/img/2.png" alt="image"/>

                            <div className="circle-img">
                                <img src="assets/img/circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="overview-content">
                        <div className="content">
                            <h2>Grow your Business with us</h2>
                            <div className="bar"></div>
                            <p>We offer variety of loan plans that help grow your business.</p>
                            <ul className="services-list">
                            <li><span><i className="flaticon-check-mark"></i> No garantor for loans</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Long time span before pay</span></li>
                                <li><span><i className="flaticon-check-mark"></i>Meaningful Amounts</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Only 5% of loan fees at repay</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Section 2 ends here */}
        {/* Section 3 starts */}
        <section className="services-area ptb-70">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content left-content">
                            <h2>24/7 Customer Service</h2>
                            <div className="bar"></div>
                            <p>We believe in our services but just in case issues shows up, our customer care is available 24/7 to respond to you.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Live chat with our customer care</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Shoot us a mail support.moonpayCu.com</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Raise a ticket complaints</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Place a call through to any available customer</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src="assets/img/3.png" alt="image"/>

                            <div className="circle-img">
                                <img src="assets/img/circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Section 3 ends */}
        
        {/* Features starts here */}
        <section className="features-area ptb-70 bg-f6f4f8">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services </h2>
                    <div className="bar"></div>
                    <p> We offer top notch services  </p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-cursor"></i>
                            </div>

                            <h3>Loans</h3>
                            <p> We offer loans to our well esteems customers with over 5 months of quality customer patronage</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-f78acb">
                                <i className="flaticon-info"></i>
                            </div>

                            <h3>Online Banking</h3>
                            <p>We have an online banking platform that helps you make seemless transactions</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-cdf1d8">
                                <i className="flaticon-alarm"></i>
                            </div>

                            <h3>Investment Opportunity </h3>
                            <p>Invest in Bitcoin, Real estate, treasure Bills.</p>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-c679e3">
                                <i className="flaticon-info"></i>
                            </div>

                            <h3>Information retrieval</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-eb6b3d">
                                <i className="flaticon-cursor"></i>
                            </div>

                            <h3>Drag and drop functionality</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-alarm"></i>
                            </div>

                            <h3>Deadline reminders</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* Features Ends here */}
        {/* Create Account starts */}
        <section class="account-create-area">
            <div class="container">
                <div class="account-create-content">
                    <h2>Apply for an account in minutes</h2>
                    <p>Get your account today!</p>
                    <a href="#" class="btn btn-primary">Get Your Moonpayscu Account</a>
                </div>
            </div>
        </section>
        {/* Create account ends */}
        {/* Footer Starts */}
        <Footer />
        {/* Footer End */}
      </div>
    );
  }
}
      
export default Home;
