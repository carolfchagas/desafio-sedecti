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
	checkAddress: function(input){
		var button = document.querySelector('label[for="register"] input');
		
		if((input.value.match(/[^A-zÀ-ú\s0-9\.,;:-]/g))||
		   (input.value.match(/^[^A-Z]/g))||
		   (input.value.match(/[^a-zA-Z0-9\s][^a-zA-Z0-9\s]/g))){
			button.disabled = true;
		}else button.disabled = false;

		if(input.value.match(/[^A-zÀ-ú\s0-9\.,;:-]/g)){
			this.setInvalid('Deve conter apenas letras,espaços e sinais de pontuação!');
			var requirement = document.querySelector('label[for="address"] li:nth-child(1)');
			requirement.classList.add('invalid');
			requirement.classList.remove('valid');
		}else{
			var requirement = document.querySelector('label[for="address"] li:nth-child(1)');
			requirement.classList.remove('invalid');
			requirement.classList.add('valid');
		}

		if(input.value.match(/^([^A-ZÀ-Ú])/g)){
			this.setInvalid('Deve começar com letra maiúscula!');
			var requirement = document.querySelector('label[for="address"] li:nth-child(2)');
			requirement.classList.add('invalid');
			requirement.classList.remove('valid');
		}else{
			var requirement = document.querySelector('label[for="address"] li:nth-child(2)');
			requirement.classList.remove('invalid');
			requirement.classList.add('valid');
		}

		if(input.value.match(/[^a-zA-ZÀ-ú0-9\s][^a-zA-ZÀ-ú0-9\s]/g)){
			this.setInvalid('Não deve conter sinais de pontuação seguidos!');
			var requirement = document.querySelector('label[for="address"] li:nth-child(3)');
			requirement.classList.add('invalid');
			requirement.classList.remove('valid');
		}else{
			var requirement = document.querySelector('label[for="address"] li:nth-child(3)');
			requirement.classList.remove('invalid');
			requirement.classList.add('valid');
		}


	}
};

var addressInput = document.getElementById('address');
addressInput.Validations = new Validations();
addressInput.addEventListener('keyup',function(){
	addressInput.Validations.checkAddress(this);
});