<?php
    require('../connection/connection.php');
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $encrypted = password_hash($password,PASSWORD_DEFAULT);
    $query = "SELECT * FROM `user` WHERE `email`='$email'";
    $check = mysqli_query($db, $query);
    if(mysqli_num_rows($check) == 1){
        $encrypted_password = mysqli_fetch_assoc($check)['password'];
        $decrypted_check = password_verify($password,$encrypted_password);
        if($decrypted_check){
            $_SESSION['email'] = $email;
            echo "success";
        }
        else{
            echo "fail2";
        }
    }
    else{
        echo "fail1";
    }
?>