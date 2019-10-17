import React from 'react';

import '../public/css';

const Login = () => {
  return (
	<div>
    <section className="login-area">
            <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <div className="login-content">
                        <div className="d-table">
                <div className="d-table-cell">
                      <center>
                        <div className="login-form">
                            <div className="logo">
                                <a href="/"><img src="assets/img/black-logo.png" alt="image"/></a>
                            </div>

                            <h3>Welcome back</h3>
                            <p>New to Moonpayscu? <a href="/register">Sign up</a></p>

                            <form>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Your email address" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <input type="password" name="password" id="password" placeholder="Your password" className="form-control"/>
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                                
                                <div className="forgot-password">
                                    <a href="/forgot-password">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                      </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
  );
}

export default Login;
