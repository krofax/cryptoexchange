    import React, { Component } from 'react'

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
                        <a href="index.php" className="waves-effect "><span className="hide-menu">Credit User</span></a>
                    </li>
                    <li><a href="debit.php" className="waves-effect "> <span className="hide-menu">Debit User</span></a>
                    </li>
                    <li><a href="total-accounts.php" className="waves-effect "> <span className="hide-menu">Total Account</span></a>
                    </li>
                    <li><a href="funds-transfer.php" className="waves-effect "> <span className="hide-menu">Activity Details</span></a>
                    </li>
                    <li><a href="user-access.php" className="waves-effect "><span className="hide-menu">User Access</span></a>
                    </li>
                    <li><a href="password.php" className="waves-effect "> <span className="hide-menu">Change Password</span></a>
                    </li>
                    <li><a href="logout.php" className="waves-effect "> <span className="hide-menu">Logout</span></a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;
            
