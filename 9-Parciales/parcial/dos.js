function Mostrar()
{ 
  var importe;
  
  importe = prompt("");
  importe = parseInt(importe);
  var importeFinal;
  importeFinal = document.getElementById("ImporteFinal").value;
  var iva;
  iva = 21;

  iva = parseInt(21);
  
  importeFinal = importe + iva;
  importeFinal = parseInt(ImporteFinal);

  alert("El importe final es " + ImporteFinal);
  


}
