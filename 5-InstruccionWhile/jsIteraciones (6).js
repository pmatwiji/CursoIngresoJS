function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while (contador < 5){
		 numero = parseInt(prompt("ingrese un numero"));
		 acumulador = acumulador + numero;
		 contador++
	}

	promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN