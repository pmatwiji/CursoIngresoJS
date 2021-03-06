/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precioLampara;
 	var precioBruto;
 	var descuento;
	var precioFinal;
	var ingresosBrutos;
	var precioConIIBB;

 	precioLampara = 35;
 	cantidad = document.getElementById('Cantidad').value;
 	cantidad = parseInt(cantidad);
 	marca = document.getElementById('Marca').value;
 	precioBruto = cantidad * precioLampara;
 	descuento = 1;	

 	switch(cantidad) 
 	{
 		case 1:
 		case 2:
 			break;
 		case 3:
 			switch (marca)
 			{
 				case "ArgentinaLuz":
 					descuento = 0.85;
 					break;
 				case "FelipeLamparas":
 					descuento = 0.90;
 					break;
 				default:
 					descuento = 0.95;
 			} // cierre switch 3
 			break;
		 case 4:
			 switch (marca) 
			 {
				 case "ArgentinaLuz":
				 case "FelipeLamparas":
				 	 descuento = 0.75;	 
					 break;
				 default:
				 	 descuento = 0.80;
					 break;
			 } //cierre switch 4
 			break;
		 case 5:
			 switch (marca) 
			 {
				 case "ArgentinaLuz":
				 	 descuento = 0.60;					 
					 break;
				 default:
					 descuento = 0.70;
					 break;
			 }//cierre switch 5
			 break;
			 default:
			 		descuento = 0.50;
 	} // cierre switch

 	precioFinal = precioBruto * descuento;
	document.getElementById('precioDescuento').value = precioFinal;

	if (precioFinal > 120) 
	{	
		precioConIIBB = precioFinal * 1.10;
		ingresosBrutos = precioConIIBB - precioFinal;
		alert("IIBB Usted pagó " + ingresosBrutos);
	}
	 
}
