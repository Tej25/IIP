<?php
    require('../connection/connection.php');
    $movie = $_REQUEST['movie'];
    $mood = $_REQUEST['mood'];
    $query = "SELECT * FROM `movies` WHERE `movie` = '$movie'";
    $result = mysqli_query($db, $query);
    if(mysqli_num_rows($result) == 1){
        $query = "UPDATE `movies` SET `mood` = '$mood' WHERE `movie` = '$movie'";
        $result = mysqli_query($db, $query);
        if($result){
            echo 'success';
        }
        else{
            echo 'fail';
        }
    }
    elseif(mysqli_num_rows($result) == 0){
        $query = "INSERT INTO `movies` (`movie`, `mood`) VALUES ('$movie', '$mood')";
        $result = mysqli_query($db, $query);
        if($result){
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