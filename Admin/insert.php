<?php
	
	include 'connect.php';
	include '../components/Form.jsx';

    function checkInputs($check){
        $check = htmlspecialchars($check);
        $check = stripslashes($check);
        $check = strip_tags($check);
        $check = ucfirst(strtolower($check));
        $check = trim($check);
        // $check = str_replace(' ', '', $check);
        return $check;
    }
	
	if(isset($_POST['submitdata'])){
		$name = checkInputs(mysqli_real_escape_string($dbs, $_POST['name']));
		$mail = checkInputs(mysqli_real_escape_string($dbs, $_POST['email']));
		$message = checkInputs(mysqli_real_escape_string($dbs, $_POST['message']));

		$qry = "INSERT INTO tbl_messages SET

			name = '$name',
			email = '$mail',
			message = '$message'
		";

		$res = mysqli_query($dbs, $qry)

		if($res){
			echo 'good';
		}
		else{
			echo 'bad';
		}
	}

?>