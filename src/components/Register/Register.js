import React from 'react';


const Loader = () => {
  return (
	<div>
    <section class="signup-area">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="signup-image">
                        <img src="assets/img/signup-bg.jpg" alt="image"/>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 p-0">
                    <div class="signup-content">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="signup-form">
                                    <div class="logo">
                                        <a href="/"><img src="assets/img/black-logo.png" alt="image"/></a>
                                    </div>

                                    <h3>Open up your Luvion Account now</h3>
                                    <p>Already signed up? <a href="login.html">Log in</a></p>

                                    <form>
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" placeholder="Your email address" class="form-control"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="password" id="password" placeholder="Create a password" class="form-control"/>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Sign Up</button>

                                        <div class="connect-with-social">
                                            <span>Or</span>
                                            <button type="submit" class="facebook"><i class="fab fa-facebook-square"></i> Connect with Facebook</button>
                                            <button type="submit" class="google"><i class="fab fa-google"></i> Connect with Google</button>
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

export default Loader;
