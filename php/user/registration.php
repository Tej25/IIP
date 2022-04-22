<?php
    require('../connection/connection.php');
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];
    $encrypted = password_hash($password,PASSWORD_DEFAULT);
    $query = "INSERT INTO `user`(`name`, `email`, `password`, `phone`) VALUES ('$name', '$email', '$encrypted', '$phone')";
    $result = mysqli_query($db, $query);
    if($result){
        echo 'success';
    }
    else{
        echo 'fail';
    }
?>