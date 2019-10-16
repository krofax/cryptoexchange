import React from 'react';
import '../public/css';
// import '../public/script';


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

                                <li className="nav-item"><a href="#" className="nav-link">Features </a>
                                    
                                </li>

                                <li className="nav-item"><a href="#" className="nav-link">Pages</a>
                                    
                                </li>

                                <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>

                                <li className="nav-item"><a href="#" className="nav-link">Blog </a>
                                    
                                </li>

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
                            <h1>Easy, fee-free banking for entrepreneurs</h1>
                            <p>Get the financial tools and insights to start, build, and grow your business.</p>
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

                                <h3>Transparent Pricing</h3>
                                <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <a href="features-1.html" className="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-facd60">
                                    <i className="flaticon-data-encryption"></i>
                                </div>

                                <h3>Fully Encrypted</h3>
                                <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <a href="features-1.html" className="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-1ac0c6">
                                    <i className="flaticon-wallet"></i>
                                </div>

                                <h3>Instant Cashout</h3>
                                <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <a href="features-1.html" className="read-more-btn">Read More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>

                                <h3>Safe and Secure</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>

                                <a href="features-1.html" className="read-more-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Feature box area ends */}
        {/* Section 1 starts here */}
        <section className="services-area ptb-70">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content left-content">
                            <h2>Freelancers, entrepreneurs, and sole traders</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Free plan available</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Full data privacy compliance</span></li>
                                <li><span><i className="flaticon-check-mark"></i> 100% transparent costs</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Commitment-free</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Real-time spending overview</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Debit Mastercard included</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="overview-image">
                        <div className="image">
                            <img src="assets/img/1.png" alt="image"/>

                            <div className="circle-img">
                                <img src="assets/img/circle.png" alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Section 1 ends here */}
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
                            <h2>Small- to medium-sized businesses</h2>
                            <div className="bar"></div>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Easy transfers</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Deposit checks instantly</span></li>
                                <li><span><i className="flaticon-check-mark"></i> A powerful open API</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Coverage around the world</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Business without borders</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Affiliates and partnerships</span></li>
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
                            <h2>Large or enterprise level businesses</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Corporate Cards</span></li>
                                <li><span><i className="flaticon-check-mark"></i> International Payments</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Automated accounting</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Request Features</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Premium Support</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Direct Debit</span></li>
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
                    <h2>Our Features</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>

                            <h3>Incredible infrastructure</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-f78acb">
                                <i className="flaticon-envelope-of-white-paper"></i>
                            </div>

                            <h3>Email notifications</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-cdf1d8">
                                <i className="flaticon-menu"></i>
                            </div>

                            <h3>Simple dashboard</h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
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
                    </div>
                </div>
            </div>
        </section>
        {/* Features Ends here */}
        {/* Create Account starts */}
        <section class="account-create-area">
            <div class="container">
                <div class="account-create-content">
                    <h2>Apply for an account in minutes</h2>
                    <p>Get your Luvion account today!</p>
                    <a href="#" class="btn btn-primary">Get Your Luvion Account</a>
                </div>
            </div>
        </section>
        {/* Create account ends */}
        {/* Footer Starts */}
        <footer class="footer-area">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-sm-6 col-md-6">
						<div class="single-footer-widget">
							<div class="logo">
								<a href="#"><img src="assets/img/black-logo.png" alt="logo"/></a>
                                <p>Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis.</p>
							</div>
                            
							<ul class="social-links">
								<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
								<li><a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6 col-md-6">
						<div class="single-footer-widget pl-5">
                            <h3>Company</h3>
                            
							<ul class="list">
								<li><a href="#">About Us</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Features</a></li>
								<li><a href="#">Our Pricing</a></li>
								<li><a href="#">Latest News</a></li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6 col-md-6">
						<div class="single-footer-widget">
                            <h3>Support</h3>
                            
							<ul class="list">
								<li><a href="#">FAQ's</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms & Condition</a></li>
								<li><a href="#">Community</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>

					<div class="col-lg-3 col-sm-6 col-md-6">
						<div class="single-footer-widget">
							<h3>Address</h3>
							
							<ul class="footer-contact-info">
								<li><span>Location:</span> 27 Division St, New York, NY 10002, USA</li>
								<li><span>Email:</span> <a href="#">luvion@gmail.com</a></li>
								<li><span>Phone:</span> <a href="#">+ (321) 984 754</a></li>
								<li><span>Fax:</span> <a href="#">+1-212-9876543</a></li>
                            </ul>
						</div>
					</div>
				</div>

                <div class="copyright-area">
                    <p>Copyright @2019 <a href="#">Luvion</a>. All rights reserved</p>
                </div>
            </div>
            
            <div class="map-image"><img src="assets/img/map.png" alt="map"/></div>
		</footer>
        {/* Footer End */}
      </div>
    );
  }
}
      
export default Home;
