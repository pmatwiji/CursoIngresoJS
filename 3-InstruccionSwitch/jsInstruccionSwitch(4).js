function mostrar()
{
	//tomo el mes  
	var mesDelAño = document.getElementById('mes').value;

	console.log(mesDelAño);

	switch(mesDelAño){

		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
	
	



}//FIN DE LA FUNCIÓN