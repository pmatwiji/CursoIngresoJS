function mostrar()
{
	//tomo el mes  
	var mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);

	switch(mesDelAño){

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break; 
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		default:
			alert("Ya pasamos el frio, hace calor!");
			break;
	}



}//FIN DE LA FUNCIÓN