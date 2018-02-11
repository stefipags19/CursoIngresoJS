//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");

	var largo;
	var ancho;

	largo = document.getElementById("largo").value;
	ancho = document.getElementById("ancho").value;

	perimetro = (largo * 2 + ancho * 2) * 3;
	perimetro = parseInt(perimetro);
	
	alert("Se necesitan " + perimetro + " metros");
	
}

