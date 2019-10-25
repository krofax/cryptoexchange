<?php
session_start();
/*** begin the session ***/
if(!isset($_SESSION['username'])){
      header("location:login.php");
   }

?>

<!-- Left navbar-header -->

        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                <div class="user-profile">
                    <div class="dropdown user-pro-body">
                         <img src="image/builder.png" alt="user-img" class="img-circle">
          
                    </div>
                </div>
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search hidden-sm hidden-md hidden-lg">
                        <!-- input-group -->
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
            <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
            </span></div>
            <?php require 'count.php';?>
                        <!-- /input-group -->
                    </li>
                    <!--<li><a href="index.php" class="waves-effect "><i class="icon-home fa-fw"></i> <span class="hide-menu">Home</a>
                    </li>-->
                    <li><a href="index.php" class="waves-effect "><i class="icon-credit-card fa-fw"></i> <span class="hide-menu">Credit User</a>
                    </li>
                    <li><a href="debit.php" class="waves-effect "><i class="icon-credit-card fa-fw"></i> <span class="hide-menu">Debit User</a>
                    </li>
                    <li><a href="total-accounts.php" class="waves-effect "><i class="icon-notebook fa-fw"></i> <span class="hide-menu">Total Account <!--<span class="label label-rouded label-warning pull-right"><?php echo $can; ?></span>--><span class="fa arrow"></span></span></a>
                    </li>
                    <!--<li><a href="active-accounts.php" class="waves-effect "><i class="icon-user-following fa-fw"></i> <span class="hide-menu">Active Account (s)<span class="fa arrow"></span></span></a>
                    </li>-->
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
        <!-- Left navbar-header end -->
