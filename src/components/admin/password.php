<?php
session_start();
/*** begin the session ***/
if(!isset($_SESSION['username'])){
      header("location:login.php");
   }

?>

<?php
//requiring the file that connects to the database
require_once 'connect/dbconnect.php';

//fetching the file that helps with the security checks
  require 'func.php';
  require 'count.php';
  session_start();
  error_reporting(1);
  if($_SERVER["REQUEST_METHOD"] == "POST")
{

    $sel = "SELECT id FROM login   ";
          $sql = mysqli_query($conn,$sel);
            while($row = mysqli_fetch_assoc($sql)) {
            $id = $row['id'];
            
            }

    $pass =  mysqli_real_escape_string($conn, test_input($_POST['pass']));
    $cpass =  mysqli_real_escape_string($conn, test_input($_POST['cpass']));
    $date = date('Y-m-d H:i:s');


    //select from the users table to check whether the password matches ehat we have in our database

   
      $up = "UPDATE login SET password = '$pass' WHERE id = '$id' ";
      $sql = mysqli_query($conn,$up);
      if ($sql){
         if ($pass != $cpass) {
          echo "<script>alert('Your Passwords do not match')</script>";
      }
      else {
        echo "<script>window.location.href='index.php'</script>";
      } 
}
    else {
        echo "<script>Something Went wrong</script>";
      } 
      
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
    <title>Dashboard </title>
    <!-- Bootstrap Core CSS -->
    <?php include'css.php'?>
</head>
<body>
    <div id="wrapper">
       <?php include'top-nav.php'?>
        <!-- End Top Navigation -->
        <?php include'sidebar.php'?>
        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-sm-6 col-xs-12">
                        <h4 class="page-title">Total Activated Accounts <span class="label label-danger"><?php echo $can;?></span></h4>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>

                <div class="row">
                    <div class="col-sm-12">
                           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="panel panel-default block1">
                                    <div class="panel-heading">Change admin password</div>
                                    <form class="form-horizontal"name="password" method="post" action="">
                                      <input type="hidden" name="up" value="1" />
                                      <input name="id" type="hidden" value="<?php echo $row['id'];?>" />
                                    <div class="panel-wrapper collapse in">
                                        <div class="panel-body">
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Password</label>
                                                <div class="col-6">
                                                    <input name="pass" class="form-control" type="password" placeholder="Enter new password">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-2 col-form-label">Confirm Password</label>
                                                <div class="col-6">
                                                    <input name="cpass" class="form-control" type="password" placeholder="Confirm new password">
                                                </div>
                                            </div>
                                            <button type="submit" name="submit" class="button-box btn btn-success" style="padding:10px 30px;">Continue </button>
                                        </div>
                                        <div class="panel-footer">  </div>
                                    </div>
                                  </form>
                                </div>
                     </div>
                </div>
            </div>
            </div>
            <footer class="footer text-center"> 2018 &copy;  </footer>
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
