function mostrar()
{

	var clave = prompt("ingrese el número clave.");

	/*if (clave != "utn750") {
		while (clave != "utn750") {
			clave = prompt("clave incorrecta. Ingrese la clave nuevamente");
			if (clave == "utn750") {
				alert ("clave correcta");
			}
		}
	} else {
		alert("clave correcta");
	} */

	while (clave != "utn750") {
		clave = prompt("Clave incorrecta. Reingrese el número clave.");
	}

	alert("Clave correcta");


}//FIN DE LA FUNCIÓN
