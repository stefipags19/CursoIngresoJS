function Mostrar()
{
//tomo la edad
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if(edad >= 13 && edad <= 17) {
    alert("Es adolescente");
}
else {
    alert("No es adolescente");
}

}//FIN DE LA FUNCIÓN