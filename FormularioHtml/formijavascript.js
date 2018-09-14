function validaformulario(){
	
	var nome="document.forms["t1"]["cpf"].value;
	if(nome == ""){
	}
	
	var cpf=document.forms["t1"]["cpf"].value;
	if(cpf == "") {
		alert("Esse campo não pode ficar em branco");
	}

}



