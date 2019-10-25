<?php
session_start();
/*** begin the session ***/


?>

<?php
require_once 'connect/dbconnect.php';

$err = '';
$success = '';

require 'func.php';

if (isset($_POST['submit'])) {
$username=  mysqli_real_escape_string($conn, test_input($_POST['username']));
$password =  mysqli_real_escape_string($conn, test_input($_POST['password']));


                                      $query = "select password,username from login where password='$password' and username='$username'";
                                      $result = mysqli_query($conn,$query);
                                      $row = mysqli_num_rows($result);
                                            if($row == 1)
                                            {
                                                $_SESSION['username'] = $username;
                                                echo "<script>alert('Login is Successful, GoodLuck!!! ')</script>";
                                                 echo '<script>window.location.href = "index.php"</script>';
       
                                                
                                           }
                                          else
                                          {
                                          echo "<script>alert('Your Password/Username is wrong ')</script>";
                                          }


}//the last if
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="../image/favicon.png">
    <title>Life's better with choices</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">

    <!-- color CSS -->
   <style>

    .error{
    font-size: 12px; /* Set message font size  */
    padding: 3px; /* Some padding to make some more space for our text  */
    background: #EDEDED; /* Add a background color to our status message   */
    border: 0px solid #DFDFDF; /* Add a border arround our status message   */
    color: red;
    }
    .success{
    font-size: 20px; /* Set message font size  */
    padding: 3px; /* Some padding to make some more space for our text  */
    background: #EDEDED; /* Add a background color to our status message   */
    border: 1px solid #DFDFDF; /* Add a border arround our status message   */
    color: green;
    font-family: cursive;
    }
    </style>

</head>

<body style="margin-bottom:100px">

    <br/>
    <div class="text-center">
    </div>
    <br/>
    <br/>

   <form class="well form-horizontal" action="" method="post">
<div class="container">

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" required="" name="username" placeholder="Enter Username">
            </div>
        </div>
        <div class="col-md-6 col-md-offset-3">
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" required="" name="password" placeholder="Enter your password">
            </div>
        </div>
    </div>

    <div class="col-md-4"></div>
    <div class="col-md-4">
        <div class="form-group">
          <label class="col-md-4 control-label"></label>
          <div class="col-md-12  text-center"><br>
            <button type="submit" name="submit" class="btn btn-warning" style="padding:10px 30px;"> LOGIN <span class="glyphicon glyphicon-send"></span></button>
          </div>
        </div>
        
    </div>
    <div class="col-md-4"></div>
</div>
</form>
</body>
</html>
