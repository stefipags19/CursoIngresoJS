function Mostrar()
{
    var largo;
    var ancho;
    

    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;

    perimetro = (largo * 2 + ancho * 2) * 3;
    perimetro = parseInt(perimetro);

    alert("Se necesitan " + perimetro + " metros");
}
