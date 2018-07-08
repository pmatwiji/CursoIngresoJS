function mostrar()
{
	var precio;
	var descuento;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;
	var precioFinal;
	precio = prompt("Ingrese el precio"); 	//1000
	precio = parseInt(precio);
	descuento = prompt("ingrese el porcentaje de descuento");   //10
	descuento = parseInt(descuento);
	descuentoEnDinero = (precio * descuento) / 100;
	precioConDescuento = precio - descuentoEnDinero;
	iva = (precioConDescuento * 21) / 100;
	precioFinal = (precioConDescuento + iva);
	alert("Su descuento es de " + descuentoEnDinero + " .Su precio con descuento es de " + precioConDescuento + " .El importe del IVA es de " + iva);
	document.getElementById('elPrecioFinal').value = precioFinal;


}
