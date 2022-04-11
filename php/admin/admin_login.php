<?php
    require('../connection/connection.php');
    session_start();
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $query = "SELECT * FROM `admin` WHERE `email` = '$email'";
    $result = mysqli_query($db, $query);
    if(mysqli_num_rows($result) == 1){
        $encrypt_password = mysqli_fetch_assoc($result)['password'];
        $decrypt_password = password_verify($password, $encrypt_password);
        if($decrypt_password){
            $_SESSION['admin_email'] = $email;
            echo 'success';
        }
        else{
            echo 'fail';
        }
    }
    else{
        echo 'fail';
    }
?>