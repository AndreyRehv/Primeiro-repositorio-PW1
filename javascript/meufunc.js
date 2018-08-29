function meufunc() {
	console.log("function meufunc() Não lembro nada");
	document.getElementById('demo').innerHTML = " Em Fahrenheit sao ";
	
}

function toCelsius(f) {
		return (5/9) * (f-32);

document.getElementById('demo').innerHTML = toCelsius(77);

}
