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
    var edad = prompt("Ingrese edad entre 18 y 90 años inclusive");
    var sexo = prompt("Ingrese sexo “M” para masculino y “F” para femenino");
    var estadoCivil = prompt("Ingrese Estado Civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
    var sueldoBruto = prompt("Ingrese sueldo bruto, no menor a 8000");
    var numeroLegajo = prompt("Ingrese numero de legajo numérico de 4 cifras, sin ceros a la izquierda.");
    var nacionalidad = prompt("Ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

    while(edad < 18 || edad > 90 || isNaN(edad)){
        edad = prompt("Por favor ingrese un valor entre 18 y 90 años inclusive.");
    }
    document.getElementById("Edad").value = edad;

    while(sexo != "F" && sexo != "M"){
        sexo = prompt("Por favor ingrese F ó M.");
    }
    if(sexo === "F") { 
        sexo = "Mujer";
    }
    else if(sexo === "M") {
        sexo = "Hombre";
    }
    document.getElementById("Sexo").value = sexo;

    while(estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4"){
        estadoCivil = prompt("Por favor ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    }
    
    var estadoCivil;
    switch(estadoCivil)
    {
        case "1": {
            estadoCivil = "Soltero";
            break;
        }
        case "2": {
            estadoCivil = "Casado";
            break;
        }
        case "3": {
            estadoCivil = "Divorciado";
            break;
        }
        case "4": {
            estadoCivil = "Viudo";
            break;
        }
    }
    document.getElementById("EstadoCivil").value = estadoCivil;

    while(sueldoBruto < 8000) {
        sueldoBruto = prompt("Por favor ingrese un valor no menor a 8000");
    }
    document.getElementById("Sueldo").value = sueldoBruto;

    while(numeroLegajo < 1000 || numeroLegajo > 10000) {
        numeroLegajo = prompt("Por favor ingrese un valor numérico de 4 cifras, sin ceros a la izquierda.");
    }
    document.getElementById("Legajo").value = numeroLegajo;

    while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
        nacionalidad = prompt("Por favor ingrese el valor “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
    }
     var nacionalidad;
    switch (nacionalidad)
    {
        case "A": {
            nacionalidad = "Argentino";
            break;
        }
        case "E": {
            nacionalidad = "Extranjero";
            break;
        }
        case "N": {
            nacionalidad = "Nacionalizado";
            break;
        }
    }
    document.getElementById("Nacionalidad").value = nacionalidad;
 

    
}
