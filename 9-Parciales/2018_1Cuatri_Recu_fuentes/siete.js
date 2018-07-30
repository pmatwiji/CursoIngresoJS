 /* Ingreso:
 		maria f 15
 		jose m 33
 		pepe m 81  

 mostrar:

 	cantidad:
 		1- mayores de edad: 2
 		2- menores de edad: 1
 		3- cantidad mujeres: 1
 		4- cantidad de hombres: 2
 	nombre:
 		5- del mayor: pepe
 		6- del menor: maria
 		7- del hombre de menor edad: jose 
 */



function mostrar()
{
	//variables
	var nombre;
	var sexo;
	var edad;
	var contador = 1;
	var cantidadMayoresDeEdad = 1;
	var cantidadMenoresDeEdad = 1;
	var contadorMujeres = 1;
	var contadorHombres = 1;

	//validacion

	while (contador < 4) {
		nombre = prompt("Ingrese el nombre");
		sexo = prompt("Ingrese el sexo. (F o M)");
		sexo = sexo.toLowerCase();
			while (sexo != "f" && sexo != "m") 
			{
				sexo = prompt("Ingrese un sexo valido");
				sexo = sexo.toLowerCase();
			}
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
			while (edad < 0 || edad > 100) 
			{
				edad = prompt("Ingrese una edad valida");
				edad = parseInt(edad);
			}
		contador++
	}
	//edad
	if (edad > 17) {
		cantidadMayoresDeEdad++;
	} else {
		cantidadMenoresDeEdad++;
	}

	//sexo

	if (sexo == "f"){
		contadorMujeres++;
	} else if (sexo == "m") {
		contadorHombres++;
	}


	document.write("La cantidad de mayores de edad es de " + cantidadMayoresDeEdad);
	document.write("<br> La cantidad de menores de edad es de " + cantidadMenoresDeEdad);
	document.write("<br> La cantidad de hombres es de " + contadorHombres);
	document.write("<br> La cantidad de mujeres es de " + contadorMujeres);


}
