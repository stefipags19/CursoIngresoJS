/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var importe;
    importe = document.getElementById("sueldo").valor;
    importe = parseInt(importe);
    
    sueldo = document.getElementById("resultado").valor;
    sueldo = importe * 0.1;

    



	
}
