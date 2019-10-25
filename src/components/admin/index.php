<?php
session_start();
/*** begin the session ***/
if(!isset($_SESSION['username'])){
      header("location:login.php");
   }

?>

<?php
require_once 'connect/dbconnect.php';
require 'func.php';
require 'count.php';


//this following codes fetches the names from the user table

$selct = "SELECT login_id, firstname, surname FROM users ORDER BY id_user DESC";
$query = mysqli_query($conn,$selct);

///fetch the id from the datatbase
if (isset($_SESSION['creditmsg']) AND $_SESSION['creditmsg'] != ""){
			echo "<script>alert('".$_SESSION['creditmsg']."')</script>";
			unset($_SESSION['creditmsg']);
		}
           
 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="image/favicon.png">
    <title>Internet Banking</title>
    <!-- Bootstrap Core CSS -->
    <?php include_once 'css.php'; ?>
</head>
<body>
    <div id="wrapper">
       <?php include 'top-nav.php';?>
        <!-- End Top Navigation -->
        <?php include 'sidebar.php';?>
        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-sm-6 col-xs-12">
                      <?php
                       $se = "SELECT firstname FROM users ";
                      $sq = mysqli_query($conn,$se);
                      while($row = mysqli_fetch_assoc($sq)) {
                        $name = $row['firstname'];

                      }
                       ?>
                        <h4 class="page-title">Hi admin, welcome back today.</h4>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                        <ol class="breadcrumb">
                           
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="white-box">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <h3 class="box-title">Credit User Account</h3>
                                    <form name="credit" class="form-horizontal" action="process-credit.php" method="post">
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label col-form-label">Credit User</label>
                                            <div class="col-sm-9">
                                                <select name="user" class="form-control ">
                                                  <option value="">--Select User to Credit--</option>
                                                  <!--the following code fetches the names of all the users in the database  -->
                                                  <?php
                                                  if ($row= mysqli_num_rows($query) > 0)  {
                                                    while($row = mysqli_fetch_assoc($query)) {
                                                      $fname = $row['firstname'];
                                                      $sname = $row['surname'];
                                                      $loginId = $row['login_id'];
                                                      
                                                       echo "<option value='".$loginId."'>$sname $fname -- $loginId </option>";
                                                    }
                                                      }

                                                   ?>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label col-form-label">Amount</label>
                                            <div class="col-sm-9">
                                            <div class="input-group">
                                              <span class="input-group-addon">$</span>
                                              <input type="text" name="amt" class="form-control" aria-label="Amount (to the nearest dollar)">
                                              <span class="input-group-addon">.00</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="form-group m-b-0">
                                            <div class="offset-sm-3 col-sm-9">
                                                <button type="submit" name="submit" class="button-box btn btn-info" >Credit Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--row -->
            </div>
            <footer class="footer text-center"> &copy; <?php echo Date('Y'); mysqli_close($conn);?> </footer>
        </div>
        <!-- /#page-wrapper -->


    <!-- jQuery -->
   <!-- jQuery -->
    <script src="../plugins/bower_components/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="../bootstrap/dist/js/tether.min.js"></script>
    <script src="../bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../plugins/bower_components/bootstrap-extension/js/bootstrap-extension.min.js"></script>
    <!-- Menu Plugin JavaScript -->
    <script src="../plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js"></script>
    <!--slimscroll JavaScript -->
    <script src="../js/jquery.slimscroll.js"></script>
    <!--Wave Effects -->
    <script src="../js/waves.js"></script>


</body>
</html>
