/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad = prompt("Ingrese edad");
    var sexo = prompt("Ingrese sexo");
    var estadoCivil = prompt("Ingrese Estado Civil")
    var sueldoBruto = prompt("Ingrese sueldo bruto");
    var numeroLegajo = prompt("Ingrese numero de legajo");
    var nacionalidad = prompt("Ingrese nacionalidad");

    while(edad < 18 && edad > 90 ){
        edad = prompt(" Por favor ingrese un valor entre 18 y 90 años inclusive.");
    }
    edad = document.getElementById("Edad").value;

    while(sexo != "f" && sexo != "m"){
        sexo = prompt(" Por favor ingrese f ó m.");
    }
    sexo = document.getElementById("Sexo").value;

    while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil !=3 && estadoCivil != 4){
        estadoCivil = prompt(" Por favor ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    }
    estadoCivil = document.getElementById("EstadoCivil").value;

    while(sueldoBruto < 8000) {
        sueldoBruto = prompt(" Por favor ingrese un valor no menor a 8000");
    }
    sueldoBruto = document.getElementById("Sueldo").value;

    while(numeroLegajo < 1000 && numeroLegajo > 10000) {
        numeroLegajo = prompt("Por favor ingrese un valor numérico de 4 cifras, sin ceros a la izquierda.");
    }
    numeroLegajo = document.getElementById("Legajo").value;

    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
        nacionalidad = prompt("Por favor ingrese el valor “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
    }
 
}
