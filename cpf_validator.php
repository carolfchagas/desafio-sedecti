<?php
	function cpfValidator($cpf){
		if(str_repeat($cpf[0],11) == $cpf || strlen($cpf) != 11) return false;

		$fdigit = 0;
		$sdigit = 0;

		$j = 10;
		for($i=0;$i<9;$i++){
			$fdigit+=$cpf[$i]*$j; 
			$j--;
		}

		$j = 11;
		for($i=0;$i<10;$i++){
			$sdigit+=$cpf[$i]*$j; 
			$j--;
		}

		if($fdigit%11 < 2) $fdigit = 0;
		else $fdigit = 11-($fdigit%11);

		if($sdigit%11 < 2) $sdigit = 0;
		else $sdigit = 11-($sdigit%11);

		if(($cpf[9] != $fdigit) || ($cpf[10] != $sdigit)) return false;
		else return true;
	}
?>