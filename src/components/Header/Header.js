import React from 'react';

import Mainheader from './Mainheader';

const Header = () => {
  return (
    <div>
      <div className="header-top white-bg">
          <div className="container">
              <div className="row">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div className="single-header-top">
                          <p>
                              <span><a href="mailto:"><i className="fa fa-envelope"></i>info@bankus.com</a></span>
                              <span><a href="tel:"><i className="fa fa-phone"></i>+000-123-789</a></span>
                          </p>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div className="single-header-top last">
                          <div className="account-menu">
                              <ul>
                                  <li><a href="contact.html">Support</a></li>
                                  <li><a href="career.html">Career</a></li>
                                  <li><a href="blog.html">Blog</a></li>
                                  <li><a href="#" data-toggle="modal" data-target="#account"><i className="fa fa-lock"></i>Login</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>    
          </div>
      </div>
    <Mainheader />
  </div>
  );
}

export default Header;
