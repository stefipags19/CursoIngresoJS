function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;

    perimetro = (largo * ancho) * 3;
    perimetro = parseInt(perimetro);

    alert("Se necesitan " perimetro " metros");
}
