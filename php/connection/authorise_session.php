<?php
    session_start();
    if(!isset($_SESSION['email'])){
        header('Location: http://localhost/IIP/html/home.html');
        exit();
    }
?>