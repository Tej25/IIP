<?php
    session_start();
    if(!isset($_SESSION['email'])){
        header('Location: http://localhost/iip/html/user_login.html');
        exit();
    }
?>