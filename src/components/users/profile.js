    import React, { Component } from 'react'

    import SideBar from './sidebar';
    import Header from './header';

    class Profile extends Component {
    render() {
        return (
            <div id="main-wrapper">
            <Header />
            <div id="content" className="py-4">
                <div className="container">
                    <div className="row">
            <SideBar />
            <div className="col-lg-9">
            <h3 className="text-5 font-weight-700 d-flex admin-heading">Personal Profile</h3>
                <div className="bg-light shadow-sm rounded infoItems">

                <a href="#edit-personal-details"
                    className="float-right text-1 text-uppercase text-muted btn-link pbtn" data-id="edit-personal-details"><i
                        className="fas fa-edit mr-1"></i>Update</a>
                <div className="row">
                    <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                    <p className="col-sm-9">Jhon Due</p>
                </div>
                

            <div id="edit-personal-details" className="accord">
                    
                </div>
            </div>
            
            
            

            <div className="bg-light shadow-sm rounded infoItems">
                <a href="#edit-phone" className="float-right text-1 text-uppercase text-muted btn-link pbtn" data-id="edit-phone"><i
                        className="fas fa-edit mr-1"></i>Update</a>
                
                <div id="edit-phone" className="accord">
                    <div className="" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-weight-400">Phone</h5>
                                <button type="button" className="close font-weight-400" data-dismiss="modal"
                                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body p-4">
                                <form id="phone" method="post">
                                    
                                    <a className="btn-link text-uppercase d-flex align-items-center text-1 float-right mb-3"
                                        href="/"><span className="text-3 mr-1"><i className="fas fa-plus-circle"></i></span>Add
                                        another Phone</a>
                                    <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-light shadow-sm rounded infoItems">
                <a href="#change-password" className="float-right text-1 text-uppercase text-muted btn-link pbtn" data-id="change-password"><i
                        className="fas fa-edit mr-1"></i>Update</a>
                
                <div id="change-password" className="accord">
                    <div className="">
                        <div className="modal-content">
                            
                            <div className="modal-body">
                                <form id="changePassword" method="post">
                                    <div className="form-group">
                                        <label htmlFor="existingPassword">Confirm Current Password</label>
                                        <input type="text" className="form-control" data-bv-field="existingpassword"
                                                id="existingPassword" required placeholder="Enter Current Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type="text" className="form-control" data-bv-field="newpassword"
                                                id="newPassword" required placeholder="Enter New Password"/>
                                    </div>
                                    
                                    <button className="btn btn-primary btn-block mt-4" type="submit">Update Security
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                </div>
            </div>
        </div>
        
        )
    }
    }

    export default  Profile