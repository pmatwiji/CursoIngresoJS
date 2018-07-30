function mostrar()
{

	var contador=0;
	// declarar variables
	var mayor;
	var menor;
	var numero;	
	var respuesta='si';
	//var bandera=0;

	while(respuesta!='n')
	{
		contador ++;
		numero = prompt("Ingrese numero #"+contador);
		numero = parseInt(numero);

		if (contador == 1){
			menor=numero;
			mayor=numero;
		}

		if(numero<menor) {
			menor=numero;
		}

		if(numero>mayor) {
			mayor=numero;
		}

		respuesta = prompt("Desea continuar ingresando numeros?");

	}


	document.getElementById('maximo').value="El numero maximo es " + mayor;
 	document.getElementById('minimo').value="El numero minimo es " + menor;



}//FIN DE LA FUNCIÓN