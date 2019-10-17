import React from 'react';


const Footer = () => {
  return (
    <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="single-footer-widget">
            <div class="logo">
              <a href="#"><img src="assets/img/black-logo.png" alt="logo"/></a>
          
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
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="single-footer-widget">
              <h3>Support</h3>
            <ul class="list">
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="single-footer-widget">
            <h3>Address</h3>
            
            <ul class="footer-contact-info">
              <li><span>Location:</span> 27 Division St, New York, NY 10002, USA</li>
              <li><span>Email:</span> <a href="#">info@MoonpaysCu.com</a></li>
              <li><span>Phone:</span> <a href="#">+ (321) 984 754</a></li>
              <li><span>Fax:</span> <a href="#">+1-212-9876543</a></li>
                          </ul>
          </div>
        </div>
      </div>

              <div class="copyright-area">
                  <p>Copyright @2019 <a href="/">MoonpaysCu</a>. All rights reserved</p>
              </div>
          </div>
          
          <div class="map-image"><img src="assets/img/map.png" alt="map"/></div>
  </footer>
  );
}

export default Footer;
