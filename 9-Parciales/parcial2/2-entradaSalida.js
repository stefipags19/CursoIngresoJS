//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");
	var importe;
	var importeFinal;
	
	
	importe = prompt("");
	
	importe = document.getElementById("importe").value;
	importe = parseInt(importe);
	importeFinal = importe * 1.21;
	importeFinal = parseInt(importeFinal);

	

	alert("El importe final es " + importeFinal);





	
}

