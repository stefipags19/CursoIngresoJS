function Mostrar()
{
//tomo la edad 
var mesDelAño; 
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{
    case "Julio" :
    case "Agosto" :
    {
        alert("Abrigate que hace frio.");
        break;
    }
    case "Septiembre" :
    case "Octubre" :
    case "Noviembre" :
    case "Diciembre" :
    case "Enero":
    {
        alert("Ya pasamos el frio, ahora calor!");
        break;
    }
    case "Febrero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio" :
    {
        alert("Falta para el invierno");
        break;
    }
}



}//FIN DE LA FUNCIÓN