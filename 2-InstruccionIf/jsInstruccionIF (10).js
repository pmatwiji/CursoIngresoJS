function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var numero;

		numero = Math.floor((Math.random() * 10) + 1);
		
		if (numero > 8) {
			alert("Su nota es: " + numero + ". Excelente!");
		}	else if (numero < 5) {
			alert("Su nota es: " + numero + ". Vamos, la proxima se puede");
		} else {
			alert("Su nota es: " + numero + ". Aprobo ");
		}

}//FIN DE LA FUNCIÓN