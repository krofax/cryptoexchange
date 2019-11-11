import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-footer-widget">
            <div className="logo">
              <a href="/"><img src="assets/img/black-logo.png" alt="logo"/></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-footer-widget pl-5">
              <h3>Company</h3>
            <ul className="list">
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

              <div className="copyright-area">
                  <p>Copyright @2019 <a href="/">MoonpaysCu</a>. All rights reserved</p>
              </div>
          </div>
          
          <div className="map-image"><img src="assets/img/map.png" alt="map"/></div>
  </footer>
  );
}

export default Footer;
