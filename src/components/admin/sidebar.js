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
                    <li><NavLink to="/settings" className="waves-effect "> <span className="hide-menu">Settings</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className="waves-effect "><span className="hide-menu">Credit User</span></NavLink>
                    </li>
                    <li><NavLink to="/deposit" className="waves-effect "> <span className="hide-menu">Debit User</span></NavLink>
                    </li>
                    <li><NavLink to="/accounts" className="waves-effect "> <span className="hide-menu">Total Account</span></NavLink>
                    </li>
                    <li><NavLink to="/password" className="waves-effect "> <span className="hide-menu">Change Password</span></NavLink>
                    </li>
                    <li><NavLink to="/logout" className="waves-effect "> <span className="hide-menu">Logout</span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;
            
