const nombreForm = document.getElementById("nombre");
const correoForm = document.getElementById("email");
const telefonoForm = document.getElementById("telefono");
const paisForm = document.getElementById("pais");
const fechaEntradaForm = document.getElementById("fechaEntrada");
const fechaSalidaForm = document.getElementById("fechaSalida");
const huespedesForm = document.getElementById("huespedes");
const habitacionForm = document.getElementById("habitacion");
const tourForm = document.getElementById("tour");
const terminosForm = document.getElementById("terminos");
const btnRegistrar = document.getElementById("ok");

const data = sessionStorage.getItem('habitacion');

btnRegistrar.addEventListener("click", function (e) {
    e.preventDefault();

    const errores = [];


    if (nombreForm.value.trim() === "") errores.push("El campo nombre no puede estar vacío.");
    if (correoForm.value.trim() === "") errores.push("El campo email no puede estar vacío.");
    if (telefonoForm.value.trim() === "") errores.push("El campo teléfono no puede estar vacío.");
    if (paisForm.value.trim() === "") errores.push("El campo país no puede estar vacío.");
    if (fechaEntradaForm.value === "") errores.push("Debe seleccionar una fecha de entrada.");
    if (fechaSalidaForm.value === "") errores.push("Debe seleccionar una fecha de salida.");
    if (huespedesForm.value === "" || parseInt(huespedesForm.value) < 1) errores.push("Debe ingresar un número válido de huéspedes.");
    if (habitacionForm.value === "") errores.push("Debe seleccionar un tipo de habitación.");
    if (tourForm.value === "") errores.push("Debe seleccionar un tour.");
    if (!terminosForm.checked) errores.push("Debe aceptar los términos y condiciones.");

    if (errores.length > 0) {
        alert("Errores:\n" + errores.join("\n"));
        return; 
    }

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
