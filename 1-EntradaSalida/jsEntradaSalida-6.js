/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var suma;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    suma = num1 + num2;

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    alert("La suma es " + suma);
}

