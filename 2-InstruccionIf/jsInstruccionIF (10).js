function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor(Math.random() * 11) + 1;

	if(random >= 9) {
		alert("Excelente");
	}
	else if(random >= 4) {
		alert("Aprobó");
	}
	else {
		alert("Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN