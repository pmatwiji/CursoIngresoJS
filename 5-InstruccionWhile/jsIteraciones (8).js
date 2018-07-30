function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while (respuesta != "n") {
	contador++;
	numero = prompt("Ingrese numero #"+contador);
	numero = parseInt(numero);
	if (numero >= 0) {
		positivo = positivo + numero; 
	} else {
		negativo = negativo * numero;
	}

	respuesta = prompt("Desea continuar ingresando numeros?");
}

document.getElementById('suma').value="La suma de los positivos es " + positivo;
document.getElementById('producto').value="El producto de los negativos es " + negativo;

}//FIN DE LA FUNCIÓN