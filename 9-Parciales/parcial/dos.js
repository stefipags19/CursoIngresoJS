function Mostrar()
{ 
  var importe;
  importe = prompt("");
  importe = parseInt(importe);
  var importeFinal;
  var iva;
  iva = 21;
  iva = parseInt(21);
  importeFinal = document.getElementById("ImporteFinal").value;
  importeFinal = importe + iva;

  alert("El importe final es " + ImporteFinal);
  


}
