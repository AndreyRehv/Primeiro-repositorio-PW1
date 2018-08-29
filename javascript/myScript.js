function myFunction() {
	console.log("function myFunction() ...rodou");
	document.getElementById('demo').innerHTML = "Javascript rodou sim";
}

function outrafuncao(){
		console.log("vc so vai ver isso no console se chamar a funcao");
		document.getElementById('demo').innerHTML = " Javascript rodou novamente?";
}

function myFunc(){
	console.log("rodou sim ou nao?");
	document.getElementById('demo2').innerHTML = " Consegui um ponto positivo? ";
	alert('NAO');
}
