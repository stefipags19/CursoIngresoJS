function Mostrar()
{ 
  var importe;
  var iva;
  importe = prompt("");
  importe = parseInt(importe);
  importeFinal = document.getElementById("ImporteFinal").value;
  iva = 21;
  iva = parseInt(21);
  
  importeFinal = importe + iva;

  alert("El importe final es " + ImporteFinal);
  


}
