//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	var importe;
	var importeFinal;
	
	
	importe = prompt("");
	importe = parseInt(importe);
	importe = document.getElementById("importe").value;
	
	importeFinal = importe * 1.21;
	importeFinal = parseInt(importeFinal);

	

	alert("El importe final es " + importeFinal);





	
}

