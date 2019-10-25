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
    <title>Admin Dashboard</title>
    <!-- Bootstrap Core CSS -->
    <?php include 'css.php';?>
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
                        <h4 class="page-title">Total Activated Accounts <span class="label label-danger"><?php echo $can; ?></span></h4>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="white-box">
                           <div class="col-sm-12">
                            <h3 class="box-title">Total Number of Accounts</h3>
                            <div class="table-responsive">
                                <table class="table color-bordered-table red-bordered-table">
                                    <thead>
                                        <tr>
                                            <th>Account Number</th>
                                            <th>Account Name</th>
                                            <th>ID Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          <tr>
                                            <?php
                                            $sel = "SELECT * FROM users ";
                                            $sql = mysqli_query($conn,$sel);
                                              while($row = mysqli_fetch_assoc($sql)) {
                                              $fname = $row['firstname'];
                                              $sname = $row['surname'];
                                              ?>
                                              <td><?php echo $row['login_id']; ?></td>
                                              <td><?php echo $fname?> <?php echo $sname?></td>
                                              <td><img src="../funds/images/<?php echo $row["id_card"]; ?>" width="110" height="90" alt="user-img" class="img-circle"></td>
                                          </tr>
                                        <?php } ?>
                                        </tr>
                                    </tbody>
                                   </table>
                               </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer class="footer text-center">  &copy; 2018</footer>
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
