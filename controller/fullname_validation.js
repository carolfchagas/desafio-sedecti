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
	checkFullname: function(input){
		var button = document.querySelector('label[for="register"] input');

		if((input.value.match(/[^A-zÀ-ú\s]/g))||(input.value.match(/^[a-z,\s]/g))){
			button.disabled = true;
		}else button.disabled = false;

		if(input.value.match(/[^A-zÀ-ú\s]/g)){
			this.setInvalid('Deve conter apenas letras e espaços!');
			var requirement = document.querySelector('label[for="fullname"] li:nth-child(1)');
			requirement.classList.add('invalid');
			requirement.classList.remove('valid');
		}else{
			var requirement = document.querySelector('label[for="fullname"] li:nth-child(1)');
			requirement.classList.remove('invalid');
			requirement.classList.add('valid');
		}

		if(input.value.match(/^[^A-ZÀ-Ú]/g)){
			this.setInvalid('Deve começar com letra maiúscula!');
			var requirement = document.querySelector('label[for="fullname"] li:nth-child(2)');
			requirement.classList.add('invalid');
			requirement.classList.remove('valid');
		}else{
			var requirement = document.querySelector('label[for="fullname"] li:nth-child(2)');
			requirement.classList.remove('invalid');
			requirement.classList.add('valid');
		}
	}

};

var fullnameInput = document.getElementById('fullname');
fullnameInput.Validations = new Validations();
fullnameInput.addEventListener('keyup',function(){
	fullnameInput.Validations.checkFullname(this);
});
