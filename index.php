<?php
	include("conect.php");
?>

<!DOCTYPE html>
<html>
<head>
	<title>Desafio SEDECTI</title>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv='X-UA-Compatible' content='IE=edge'>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500;600&display=swap" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="view/style.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

</head>
<body>
	<div class="container text-center main-text">
		<h2>Desafio <span>SEDECTI </span> 2020</h2>
	</div>
	<div class="main-form container text-center">
		<h3>Formulário de Cadastro</h3>
		<form class="registration form-group" method="post" action="register.php">
			<div class="full-name">
				<label for="fullname">
					<span>Nome Completo</span>
					<input class="form-control" type="text" name="fullname" id="fullname" required/>

					<ul class="requirements">
						<li>Deve conter apenas letras e espaços em branco</li>
						<li>Deve começar com uma letra maiúscula</li>
					</ul><!--requirements-->
				</label>
			</div><!--full-name-->

			<div class="row text-center">
				<div class="age col-4">
					<label for="age">
						<span>Idade</span>
						<input class="form-control" type="number" name="age" id="age" min="0" max="99">
					</label>
				</div><!--age-->

				<div class="cpf col">
					<label for="cpf">
						<span>CPF (Apenas números)</span>
						<input class="form-control" type="text" name="cpf" id="cpf" maxlength="11" onkeypress="return event.charCode > 47 && event.charCode < 58" required/>
					</label>
				</div><!--cpf-->
			</div><!--row-->

			<div class="gender">
				<label style="text-align: center;" for="gender">
					<span>Sexo</span>
					<div>
						<div class="gender form-check form-check-inline">
				  			<input class="form-check-input" type="radio" id="male" name="gender" value="M">
				  			<label class="form-check-label" for="male">M</label><br>
						</div><!--gender-->

						<div class="gender form-check form-check-inline">
							<input class="form-check-input" type="radio" id="female" name="gender" value="F">
				  			<label class="form-check-label" for="female">F</label><br>
				  		</div><!--gender-->
				  	</div>
			  	</label>
			</div><!--gender-->

			<div class="address">
				<label for="address">
					<span>Endereço</span>
					<input class="form-control" type="text" name="address" id="address" required/>

					<ul class="requirements">
						<li>Deve conter apenas letras, números e sinais de pontuação</li>
						<li>Deve começar com uma letra maiúscula</li>
						<li>Não deve conter sinais de pontuação seguidos(Ex.: ,,)</li>
					</ul>
				</label>
			</div><!--address-->

			<div class="submit-button">
				<label for="register">
					<input class="btn btn btn-danger btg-lg btn-block" type="submit" name="register" id="register" value="Cadastrar!">
				</label>
			</div><!--submit-button-->

		</form><!--registration-->
	</div><!--container-->

	<div class="final-text container text-center">
		<p>Ana Carolina Freitas das Chagas • carolfchagas • 2020</p>
	</div>

	<script src="controller/fullname_validation.js"></script>
	<script src="controller/address_validation.js"></script>
	<script src="controller/cpf_validation.js"></script>
</body>
</html>