function Validations(){
	this.invalid = [];
}

Validations.prototype = {
	setInvalid: function(message){
		this.invalid.push(message);
	},
	getInvalid: function(){
		return this.invalid.join('. \n');
	},
	checkCPF: function(input){
		var button = document.querySelector('label[for="register"] input');
		if(cpfValidator(input)){
			button.disabled = false;
		}else{
			this.setInvalid('CPF inválido!');
			button.disabled = true;
		}
	}
};


function cpfValidator(cpf){
	var digit = cpf.charAt(0);
	if((cpf == digit.repeat(11))||
		(cpf.length != 11)) return false;

	var fdigit = 0;
	var sdigit = 0;
	var j=10
	for(var i=0;i<9;i++){
		fdigit+= parseInt(cpf.charAt(i))*j;
		j--;
	}
	var j=11
	for(var i=0;i<10;i++){
		sdigit+= parseInt(cpf.charAt(i))*j;
		j--;
	}

	if(fdigit%11 < 2) fdigit = 0;
	else fdigit = 11-(fdigit%11);

	if(sdigit%11 < 2) sdigit = 0;
	else sdigit = 11-(sdigit%11);

	if(((parseInt(cpf.charAt(9)))!=fdigit)||
		((parseInt(cpf.charAt(10)))!=sdigit)) return false;
	else return true;
}

var cpfInput = document.getElementById('cpf');
cpfInput.Validations = new Validations();
cpfInput.addEventListener('keyup',function(){
	addressInput.Validations.checkCPF(this);
});