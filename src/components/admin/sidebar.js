    import React, { Component } from 'react'

    class SideBar extends Component {
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse slimscrollsidebar">
                <div className="user-profile">
                    <div className="dropdown user-pro-body">
                        <img src="../" alt="user-img" className="img-circle"/>
                    </div>
                </div>
                <ul className="nav" id="side-menu">
                    <li>
                        <a href="index.php" className="waves-effect "><i className="icon-credit-card fa-fw"></i> <span className="hide-menu">Credit User></span></a>
                    </li>
                    <li><a href="debit.php" className="waves-effect "><i className="icon-credit-card fa-fw"></i> <span className="hide-menu">Debit User></span></a>
                    </li>
                    <li><a href="total-accounts.php" className="waves-effect "><i className="icon-notebook fa-fw"></i> <span className="hide-menu">Total Account <span className="fa arrow"></span></span></a>
                    </li>
                    <li><a href="funds-transfer.php" className="waves-effect "><i className="icon-wallet fa-fw"></i> <span className="hide-menu">Activity Details<span className="fa arrow"></span></span></a>
                    </li>
                    <li><a href="user-access.php" className="waves-effect "><i className="icon-shield fa-fw"></i> <span className="hide-menu">User Access<span className="fa arrow"></span></span></a>
                    </li>
                    <li><a href="password.php" className="waves-effect "><i className="icon-key fa-fw"></i> <span className="hide-menu">Change Password<span className="fa arrow"></span></span></a>
                    </li>
                    <li><a href="logout.php" className="waves-effect "><i className="icon-logout fa-fw"></i> <span className="hide-menu">Logout<span className="fa arrow"></span></span></a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;
            
