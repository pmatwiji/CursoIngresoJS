function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

if (edad <= 17 && edad >= 13) {
	alert("es un adolescente");
} else if (edad >= 18) {
	alert("es mayor de edad");
} else {
	alert("Usted es un niño");
}



}//FIN DE LA FUNCIÓN