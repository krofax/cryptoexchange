    import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
    
    class SideBar extends Component {
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse slimscrollsidebar">
                <div className="user-profile">
                    <div className="dropdown user-pro-body">
                        <img src="assets/img/how-it-works-image/2.png" alt="user-img" className="img-circle"/>
                    </div>
                </div> 
                <ul className="nav" id="side-menu">
                    <li>
                        <a href="/admin" className="waves-effect "><span className="hide-menu">Credit User</span></a>
                    </li>
                    <li><a href="/deposit" className="waves-effect "> <span className="hide-menu">Debit User</span></a>
                    </li>
                    <li><a href="/accounts" className="waves-effect "> <span className="hide-menu">Total Account</span></a>
                    </li>
                    <li><a href="/password" className="waves-effect "> <span className="hide-menu">Change Password</span></a>
                    </li>
                        <li><a href="/actions" className="waves-effect "> <span className="hide-menu">Actions</span></a>
                    </li>
                    <li><a href="/logout" className="waves-effect "> <span className="hide-menu">Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;
            
