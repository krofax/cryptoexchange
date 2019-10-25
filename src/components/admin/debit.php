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



if (isset($_POST['submit'])) {
        
    
  $amt =  mysqli_real_escape_string($conn, test_input($_POST['amt']));
  $user =  mysqli_real_escape_string($conn, test_input($_POST['user']));
   $date = date('Y-m-d H:i:s');
    //session amt
    $sql_dump = mysqli_query($conn,"SELECT amount, email FROM users WHERE login_id = '$user'");
	$data = mysqli_fetch_array($sql_dump);
	 $previous_amt = $data[0];
	 $user_email = $data[1];
     $updateamount = $previous_amt - $amt;
    //sel $query
     if($updateamount > 0) {
        
        $up = "UPDATE users SET amount = '$updateamount',  date_up = '$date', debit = '$amt' WHERE login_id = '$user'";
        $update = mysqli_query($conn, $up);
     
         if ($update) {
             require 'phpmailer/PHPMailerAutoload.php';
                $mail = new PHPMailer();
                $mail->Host = "smtp.gmail.com";
                $mail->SMTPSecure = "tls";
                $mail->Port = 587;
                $mail->SMTPAuth = true;
                $mail->Username = 'amicdesigntechnologies@gmail.com';
                $mail->Password = '08064075956';
                
                $mail->setFrom('noreply@communityfirsitcu.com', 'Community First CU');
                $mail->addAddress($user_email);
                $mail->Subject = 'Debit Alert';
                $message="Your account has been debited with sum of $$amt. Balance: $".$updateamount;
                $mail->Body = $message;
                $mail->send();
            mysqli_query($conn, "INSERT INTO debit (amt, bal, user, acctnum, descrip, date, bname) VALUES('$amt', '$updateamount', '$user', '$user', 'Debit Transaction', '$date', 'bank')");
           echo "<script>alert('The sum of $$amt was successfully debited  ')</script>";
         }
         else {
           echo "<script>alert('User Couldnt be debited ')</script>";
         }
 
     } else{ 
         echo "<script>alert('Account is low, reduce the amount. Bal: $$previous_amt')</script>";
         
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
                                    <h3 class="box-title">Debit User Account</h3>
                                    <form name="credit" class="form-horizontal" action="" method="post">
                                        <div class="form-group row">
                                            <label class="col-sm-3 control-label col-form-label">Debit User</label>
                                            <div class="col-sm-9">
                                                <select name="user" class="form-control ">
                                                  <option value="">--Select User to Debit--</option>
                                                  <?php
                                                  if ($row= mysqli_num_rows($query) > 0)  {
                                                    while($row = mysqli_fetch_assoc($query)) {
                                                       $fname = $row['firstname'];
                                                      $sname = $row['surname'];
                                                      $cramount = $row['credit'];
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
                                                <button type="submit" name="submit" class="button-box btn btn-info" >Debit Account</button>
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
            <footer class="footer text-center"> &copy; 2018 </footer>
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
