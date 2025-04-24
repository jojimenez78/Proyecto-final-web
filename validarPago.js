const numTarjetaForm = document.getElementById("numTarjeta");
const vencimientoForm = document.getElementById("vencimiento");
const cvvForm = document.getElementById("cvv");
const nombreTitularForm = document.getElementById("nombreTitular");
const correoForm = document.getElementById("correo");
const btnRegistrar = document.querySelector("#formPago button[type='submit']");

const sonido = new Audio("audio/level-up-3-199576.mp3");

btnRegistrar.addEventListener("click", function (e) {
    e.preventDefault();

    const errores = [];

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const textRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    const cardNumberRegex = /^\d{13,19}$/;
    const vencimientoRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
    const cvvRegex = /^\d{3,4}$/; 

    if (numTarjetaForm.value.trim() === "") {
        errores.push("El campo número de tarjeta no puede estar vacío.");
    } else if (!cardNumberRegex.test(numTarjetaForm.value.replace(/\s+/g, ''))) {
        errores.push("El número de tarjeta no es válido.");
    }

    if (vencimientoForm.value.trim() === "") {
        errores.push("El campo vencimiento no puede estar vacío.");
    } else if (!vencimientoRegex.test(vencimientoForm.value.trim())) {
        errores.push("El campo vencimiento debe tener el formato MM/AA.");
    }

    if (cvvForm.value.trim() === "") {
        errores.push("El campo CVV no puede estar vacío.");
    } else if (!cvvRegex.test(cvvForm.value.trim())) {
        errores.push("El campo CVV debe tener 3 o 4 dígitos.");
    }

    if (nombreTitularForm.value.trim() === "") {
        errores.push("El campo nombre del titular no puede estar vacío.");
    } else if (!textRegex.test(nombreTitularForm.value.trim())) {
        errores.push("El campo nombre del titular solo puede contener letras y espacios.");
    }

    if (correoForm.value.trim() === "") {
        errores.push("El campo correo electrónico no puede estar vacío.");
    } else if (!emailRegex.test(correoForm.value.trim())) {
        errores.push("El campo correo electrónico no es válido.");
    }

    const alertaErrores = document.getElementById("alertaErrores");

    if (errores.length > 0) {
        sonido.play();
        alertaErrores.style.display = "block";
        alertaErrores.innerHTML = "<strong>Errores:</strong><br>" + errores.join("<br>");
        window.scrollTo(0, 0);
        return;
    } else {
        alertaErrores.style.display = "none";
        alertaErrores.innerHTML = "";
    }

    console.log("Número de Tarjeta:", numTarjetaForm.value);
    console.log("Vencimiento:", vencimientoForm.value);
    console.log("CVV:", cvvForm.value);
    console.log("Nombre del Titular:", nombreTitularForm.value);
    console.log("Correo Electrónico:", correoForm.value);

    sessionStorage.setItem("numTarjeta", numTarjetaForm.value);
    sessionStorage.setItem("vencimiento", vencimientoForm.value);
    sessionStorage.setItem("cvv", cvvForm.value);
    sessionStorage.setItem("nombreTitular", nombreTitularForm.value);
    sessionStorage.setItem("correo", correoForm.value);

  
   
    window.location.href = "gracias.html";
});
