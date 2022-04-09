<?php
	$db = mysqli_connect('localhost','root','','iip');
	if(mysqli_connect_errno()){
		echo "Error connecting to database" . mysqli_connect_errno();
	}
?>