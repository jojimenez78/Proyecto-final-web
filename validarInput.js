document.getElementById("ok").addEventListener("click", function() {
  const errores = [];

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const pais = document.getElementById("pais").value.trim();
  const fechaEntrada = document.getElementById("fechaEntrada").value;
  const fechaSalida = document.getElementById("fechaSalida").value;
  const huespedes = document.getElementById("huespedes").value;
  const habitacion = document.getElementById("habitacion").value;
  const tour = document.getElementById("tour").value;
  const terminos = document.getElementById("terminos").checked;


  if (nombre === "") errores.push("El campo nombre no puede estar vacío.");
  if (email === "") errores.push("El campo email no puede estar vacío.");
  if (telefono === "") errores.push("El campo teléfono no puede estar vacío.");
  if (ciudad === "") errores.push("El campo ciudad no puede estar vacío.");
  if (pais === "") errores.push("El campo país no puede estar vacío.");
  if (fechaEntrada === "") errores.push("Debe seleccionar una fecha de entrada.");
  if (fechaSalida === "") errores.push("Debe seleccionar una fecha de salida.");
  if (huespedes === "" || parseInt(huespedes) < 1) errores.push("Debe ingresar un número válido de huéspedes.");
  if (habitacion === "") errores.push("Debe seleccionar un tipo de habitación.");
  if (tour === "") errores.push("Debe seleccionar un tour.");
  if (!terminos) errores.push("Debe aceptar los términos y condiciones.");

 
  const contenedorErrores = document.getElementById("errores");
  if (errores.length > 0) {
    contenedorErrores.innerHTML = `
      <div class="alert alert-danger">
        <ul>${errores.map(e => `<li>${e}</li>`).join("")}</ul>
      </div>`;
  } else {
    contenedorErrores.innerHTML = "";
    alert("¡Formulario enviado con éxito!");

  }
});
