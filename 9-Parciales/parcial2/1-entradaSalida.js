//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var lado;
	lado = document.getElementById("lado").value;
	perimetro = lado * 3;
	perimetro = parseInt(perimetro);

	alert("El perimetro del triangulo equilatero es " + perimetro);
	
}

