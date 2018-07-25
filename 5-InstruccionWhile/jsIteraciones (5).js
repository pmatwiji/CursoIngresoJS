function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	sexo = sexo.toUpperCase();
	while (!(sexo == "F" || sexo == "M")) {
		sexo = prompt("Dato incorrecto. Reingrese f ó m .");
		sexo = sexo.toUpperCase();
	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN