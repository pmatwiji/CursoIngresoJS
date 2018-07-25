function mostrar()
{
  var planeta;
  planeta = prompt("Ingrese un planeta");

  switch (planeta) 
  {
    case "mercurio" :
    case "venus" :
      alert("Acá hace mas calor");
      break;
    case "tierra":
      alert("Acá vivimos");
      break;
    case "marte" :
    case "júpiter" :
    case "saturno" :
    case "urano" :
    case "neptuno" :
    case "plutón" :
      alert("Acá hace mas frio");
      break;
    default:
      alert("Este no es un planeta del sistema solar");
      break;
  }

}
