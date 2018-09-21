function validaformulario(){
    
    // var nome= `document.forms["t1"]["cpf"].value`;
    // if(nome == ""){
    // }
    
    // var cpf=document.forms["t1"]["cpf"].value;
    // if(cpf == "") {
    //     alert("Esse campo não pode ficar em branco");
    // }
	
	
    const form = document.getElementsByName("t1")[0].getElementsByTagName('input') 
    var res = '' 

    for (let i = 0; i < form.length; i++) { 
        if (form[i].value == '') res +=  form[i].name + '\n'  
		}
    
    if (res != '') alert('O(s) campo(s) precisa(m) ser preenchido(s): ' + '\n' + res + '') 
    
	
	var cpf=t1.cpf.value;
	if(cpf.length != 11){
		alert('INVALIDO')
		t1.cpf.focus();
		    return false;
	}
	
	var cep=t1.cep.value;
	if(cep.length != 8){
		alert('INVALIDO')
		t1.cep.focus();
	
	return false;
	}
}

const form2 = document.getElementsByTagName("form")
for(let i = 0; i<form2.length; i++){
    form2[i].getElementsByTagName('input')
}
console.log('Inputs dos formulários', form2)


