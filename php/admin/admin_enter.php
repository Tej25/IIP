<?php
    require('../connection/connection.php');
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $encrypt = password_hash($password,PASSWORD_DEFAULT);
    $query = "INSERT INTO `admin`(`email`, `password`) VALUES ('$email', '$encrypt')";
    $result = mysqli_query($db, $query);
    if($result){
        echo 'success';
    }
    else{
        echo 'fail';
    }
?>