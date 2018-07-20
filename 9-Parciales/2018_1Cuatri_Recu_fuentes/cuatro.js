function mostrar() {
  var numeroUno = prompt("Ingrese el primer numero");
  var numeroDos = prompt("Ingrese el segundo numero");
  var resultado;

  if (numeroUno == numeroDos) {
    alert(numeroUno + numeroDos);
  } else if (parseInt(numeroUno) > parseInt(numeroDos)) {
    resultado = numeroUno / numeroDos;
  } else {
    resultado = parseInt(numeroUno) + parseInt(numeroDos);
    if (resultado < 50) {
      alert("la suma es " + resultado + " y es menor a 50");
    }
  }
}