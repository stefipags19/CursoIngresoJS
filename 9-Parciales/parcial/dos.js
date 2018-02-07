function Mostrar()
{ 
  var importe;
  var importeFinal;
  importe = prompt("");
  importe = parseInt(importe);
  importeFinal = document.getElementById("importeFinal").value;
  
  importeFinal = parseInt(importeFinal);
  importeFinal = importe + 21;
  alert("El importe final es " + importeFinal);
  


}
