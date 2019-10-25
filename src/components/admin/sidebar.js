    import React, { Component } from 'react'

    class SideBar extends Component {
    render() {
        return (
            <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                <div class="user-profile">
                    <div class="dropdown user-pro-body">
                        <img src="image/builder.png" alt="user-img" class="img-circle"/>
                    </div>
                </div>
                <ul class="nav" id="side-menu">
                    <li>
                        <a href="index.php" class="waves-effect "><i class="icon-credit-card fa-fw"></i> <span class="hide-menu">Credit User></span></a>
                    </li>
                    <li><a href="debit.php" class="waves-effect "><i class="icon-credit-card fa-fw"></i> <span class="hide-menu">Debit User></span></a>
                    </li>
                    <li><a href="total-accounts.php" class="waves-effect "><i class="icon-notebook fa-fw"></i> <span class="hide-menu">Total Account <span class="fa arrow"></span></span></a>
                    </li>
                    <li><a href="funds-transfer.php" class="waves-effect "><i class="icon-wallet fa-fw"></i> <span class="hide-menu">Activity Details<span class="fa arrow"></span></span></a>
                    </li>
                    <li><a href="user-access.php" class="waves-effect "><i class="icon-shield fa-fw"></i> <span class="hide-menu">User Access<span class="fa arrow"></span></span></a>
                    </li>
                    <li><a href="password.php" class="waves-effect "><i class="icon-key fa-fw"></i> <span class="hide-menu">Change Password<span class="fa arrow"></span></span></a>
                    </li>
                    <li><a href="logout.php" class="waves-effect "><i class="icon-logout fa-fw"></i> <span class="hide-menu">Logout<span class="fa arrow"></span></span></a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SideBar;
            
