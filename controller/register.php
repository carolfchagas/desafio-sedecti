<?php
	include("conect.php");
	include("cpf_validator.php");
	if((isset($_POST['register'])) && (cpfValidator($_POST['cpf']))){
		$fullname = $_POST['fullname'];
		$cpf = $_POST['cpf'];
		$age = $_POST['age'];
		$gender = $_POST['gender'];
		$address = $_POST['address'];

		$sql = $pdo->prepare("INSERT INTO `user_data` VALUES (null,?,?,?,?,?)");
		$sql->execute(array($fullname,$age,$gender,$address,$cpf));

	}
	header("location: index.php");
?>