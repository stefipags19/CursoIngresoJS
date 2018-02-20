function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero >= 1 && numero <= 10) {
		numero = prompt("Valor incorrecto, por favor ingrese un número entre 0 y 10.");
	}

	alert("¡Bien! Ingresaste el numero " +  numero);




}//FIN DE LA FUNCIÓN