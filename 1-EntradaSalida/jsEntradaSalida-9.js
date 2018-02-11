/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var importe;
    importe = document.getElementById("sueldo").valor;
    importe = parseInt(importe);
    
    resultado = document.getElementById("resultado").valor;
    resultado = importe * 0.1;

    



	
}
