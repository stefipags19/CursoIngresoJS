function Mostrar()
{
//tomo la edad 
var mesDelAño; 
var mesDelAño = document.getElementById('mes').value;

if(mesDelAño === "Marzo" || "Abril" || "Mayo" || "Junio") {
    alert("Falta para el invierno.");
}
else if(mesdelAño === "Julio" || "Agosto") {
    alert("Abrigate que hace frio.");
}
else
{
    alert("Ya pasamos el frio, ahora calor!");
}

}//FIN DE LA FUNCIÓN