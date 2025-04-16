const nombreForm = document.getElementById("nombre");
const correoForm = document.getElementById("email");
const telefonoForm = document.getElementById("telefono");
const paisForm = document.getElementById("pais");
const fechaEntradaForm = document.getElementById("fechaEntrada");
const fechaSalidaForm = document.getElementById("fechaSalida");
const huespedesForm = document.getElementById("huespedes");
const btnRegistrar = document.getElementById("ok");

const data = sessionStorage.getItem('habitacion');

btnRegistrar.addEventListener("click", function (e) {
    e.preventDefault();
  
    console.log("Nombre:", nombreForm.value);
    console.log("Correo:", correoForm.value);
    console.log("Teléfono:", telefonoForm.value);
    console.log("País:", paisForm.value);
    console.log("Fecha Entrada:", fechaEntradaForm.value);
    console.log("Fecha Salida:", fechaSalidaForm.value);
    console.log("Huéspedes:", huespedesForm.value);
    console.log("Habitación guardada en sessionStorage:", data);


    sessionStorage.setItem("nombre", nombreForm.value);
    sessionStorage.setItem("correo", correoForm.value);
    sessionStorage.setItem("telefono", telefonoForm.value);
    sessionStorage.setItem("pais", paisForm.value);
    sessionStorage.setItem("fechaEntrada", fechaEntradaForm.value);
    sessionStorage.setItem("fechaSalida", fechaSalidaForm.value);
    sessionStorage.setItem("huespedes", huespedesForm.value);
    window.location.href = "formPago.html"; 

});
