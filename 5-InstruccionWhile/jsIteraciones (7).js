function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	respuesta = respuesta.toLowerCase();
	var numero;
	var promedio;
	

	while (respuesta == "si") 
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador ++;
		respuesta = prompt("Desea continuar? Ingrese Si o No");
		respuesta = respuesta.toLowerCase();
	}

	promedio = acumulador / contador;




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN