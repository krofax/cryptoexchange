import React from 'react';


const Footer = () => {
  return (
    <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="single-footer-widget">
            <div class="logo">
              <a href="/"><img src="assets/img/black-logo.png" alt="logo"/></a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6 col-md-6">
          <div class="single-footer-widget pl-5">
              <h3>Company</h3>
            <ul class="list">
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
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
