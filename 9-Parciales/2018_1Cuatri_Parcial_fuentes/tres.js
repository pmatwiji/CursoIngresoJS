function mostrar()
{
    var precio;
    var descuento;
    precio = prompt("ingrese el precio");
    descuento = prompt("ingrese el descuento");
    var resultado;
    resultado = precio - (precio/100 * descuento);
    document.getElementById('elPrecioFinal').value = "el precio final es " + resultado;
}
