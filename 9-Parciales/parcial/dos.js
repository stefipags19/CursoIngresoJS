function Mostrar()
{ 
  var importe;
  
  importe = prompt("");
  importe = parseInt(importe);
  importeFinal = document.getElementById("ImporteFinal").value;
  iva = 21;
  iva = parseInt(21);
  importeFinal = importe + iva;
  importeFinal = parseInt(ImporteFinal);
  alert("El importe final es " + ImporteFinal);
  


}
