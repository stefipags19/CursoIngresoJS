function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if(edad >= 13 && <= 17) {
    alert("Es adolescente");
}


}//FIN DE LA FUNCIÓN