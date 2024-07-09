function readValues ()
{
   let carnet = document.getElementById("carnet").value;
   let nombre = document.getElementById("nombre").value;
   let carrera = document.getElementById("carrera").value;
   let correo = document.getElementById("correo").value;
   let cum = document.getElementById("cum").value;

   document.getElementById("lblcarnet").textContent = "Código de carnet: " + carnet;
   document.getElementById("lblnombre").textContent = "Nombre: " + nombre;
   document.getElementById("lblcarrera").textContent = "Carrera: " + carrera;
   document.getElementById("lblcorreo").textContent = "Correo Electrónico: " + correo;
   document.getElementById("lblcum").textContent = "Promedio Global: " + cum;
}

