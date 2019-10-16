import React from 'react';

import Formodal from './Formodal';
import FormLogin from './FormLogin';

const Modal = () => {
  return (
    <div className="modal fade" id="account" tabindex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
            <h5>Account access</h5>  
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="flaticon-cancel"></i>
            </button>
        </div>
        <div className="modal-body">
            <ul className="nav nav-pills mb-40 acc-tab-btn" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item">
                    <a id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Signup</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                    <div className="social-login">
                        <a href="#" className="facebook-bg"><i className="fa fa-facebook"></i>Facebook</a>
                        <a href="#" className="twitter-bg"><i className="fa fa-twitter"></i>Twitter</a>
                        <a href="#" className="linkedin-bg"><i className="fa fa-linkedin"></i>Linkedin</a>
                    </div>
                    <div className="acc-form">
                        <FormLogin />
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                    <div className="acc-form">
                        <Formodal />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default Modal;
