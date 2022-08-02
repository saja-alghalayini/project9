<?php
require "connection.php";

$firstname  = $_REQUEST['firstname'];
$email     = $_REQUEST['email'];
$password  = md5($_REQUEST['password']);



$sql = "INSERT INTO users (firstname, email, password) VALUES (?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$firstname, $email, $password]);

?>