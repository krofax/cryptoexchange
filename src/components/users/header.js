import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header02">
                <div className="header-main">
                    <div className="container d-flex align-items-center">
                        <a href="/">
                            <img src="assets/img/black-logo.png" alt="logo"/>
                        </a>
                        <nav className="primary-menu ml-auto">
                            <a id="mobile-menu-toggler" href="#"><i className="fas fa-bars"></i></a>
                            <ul>
                                <li className="current-menu-item has-menu-child"><a href="#">Home</a>
                                    
                                </li>
                                <li className="current-menu-item"><a href="dashboard.html">Dashboard</a></li>
                                
                                
                                <li className="has-menu-child pro-menu-drop">
                                    <a href="#">
                                        <div className="header-pro-thumb">
                                            <img className="rounded-circle" src="assets/img/profile.jpg" alt="down"/>
                                        </div> Jhone Due <i className="fas fa-chevron-down"></i>
                                    </a>
                                    <ul className="dropdown-menu-md sub-menu profile-drop">
                                        <li className="dropdown-header">
                                            <div>
                                                <h5 className="hidden-xs m-b-0 text-primary text-ellipsis">Jhon Due</h5>
                                                <div className="small text-muted"><span>Membership ID P14362606</span></div>
                                            </div>
                                        </li>
                                        <li><hr className="mx-n3 mt-0"/></li>
                                        <li className="nav__create-new-profile-link">
                                            <a href="profile.html">
                                                <span>View personal profile</span>
                                            </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li className="nav__dropdown-menu-items">
                                            <a href="profile-notifications.html">
                                                <i className="icon icon-setting"></i>
                                                <span>Settings</span>
                                            </a>
                                        </li>
                                        <li className="nav__dropdown-menu-items">
                                            <a href="#"><i className="icon icon-logout"></i><span>Logout</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </header>
    )
  }
}

export default Header;