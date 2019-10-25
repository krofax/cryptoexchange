<?php
session_start();
if(!isset($_SESSION['username'])){
      header("location:login.php");
}
require_once 'connect/dbconnect.php';
  $amt =  mysqli_real_escape_string($conn, $_POST['amt']);
  $user =  mysqli_real_escape_string($conn, $_POST['user']);
  $date = date('Y-m-d H:i:s');
    //sel $query
     $user_details = mysqli_fetch_array(mysqli_query($conn, "Select amount, email FROM users WHERE login_id = '$user'"));
     $previous_amt = $user_details[0];
     $user_email = $user_details[1];
     //session amt
    $_SESSION['abal'] = $amt + $previous_amt;
     $up = "UPDATE users SET credit = '$amt', amount = '".$_SESSION['abal']."', date_up = '$date' WHERE login_id = '$user'";
     $update = mysqli_query($conn, $up); 
     mysqli_query($conn, "INSERT INTO credit (amt, bal, user, acctnum, descrip, date, bname) VALUES('$amt', '".$_SESSION['abal']."', '$user', '$user', 'Credit Transaction', '$date', 'bank')");
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
                $mail->Subject = 'Credit Alert';
                $message="Your account has been credited with sum of N$amt. Balance: N".$_SESSION[abal];
                $mail->Body = $message;
                $mail->send();
           $_SESSION['creditmsg'] = "Credit Successful";
        }else{
            $_SESSION['creditmsg'] = "Credit Unsuccessful";
        }
 header("Location:index.php");
 
exit();
?>