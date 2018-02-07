function Mostrar()
{ 
  var importe;
  importe = prompt("");
  importe = parseInt(importe);
  var iva;
  iva = 21;
  iva = parseInt(21);
  importeFinal = document.getElementById("ImporteFinal").value;
  importeFinal = importe + iva;
  importeFinal = parseInt(ImporteFinal);
  alert("El importe final es " + ImporteFinal);
  


}
