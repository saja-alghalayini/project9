<?php
require "connection.php";

$firstname  = $_REQUEST['firstname'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);
$con_password  = md5($_REQUEST['con_password']);


$sql = "INSERT INTO users (firstname, email, password, con_password) VALUES (?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$firstname, $email, $password, $con_password]);

?>