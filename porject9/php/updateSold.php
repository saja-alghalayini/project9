<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$serverName='localhost';
$dbUserName='root';
$password='';
$database='project9';

$con = mysqli_connect($serverName, $dbUserName, $password, $database);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }
  



  $id =$_REQUEST['id'];
  $user_id=$_REQUEST['user_id'];
  
 
  
  $sql = "UPDATE products SET is_sold=1,user_id='$user_id' WHERE id='$id';";
  
  mysqli_query($con,$sql);
  
  $con->close();
?>