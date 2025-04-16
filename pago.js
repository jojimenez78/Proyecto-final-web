

    document.getElementById("resumenNombre").textContent = nombre;
    document.getElementById("resumenCorreo").textContent = correo;
    document.getElementById("resumenTelefono").textContent = telefono;
    document.getElementById("resumenPais").textContent = pais;
    document.getElementById("resumenFechaEntrada").textContent = fechaEntrada;
    document.getElementById("resumenFechaSalida").textContent = fechaSalida;
    document.getElementById("resumenHabitacion").textContent = habitacion;
    document.getElementById("resumenHuespedes").textContent = huespedes;
    document.getElementById("resumenTour").textContent = incluyeTour ? "Sí" : "No";


    document.addEventListener('DOMContentLoaded', () => {
      const nombre = sessionStorage.getItem("nombre");
      const correo = sessionStorage.getItem("correo");
      const telefono = sessionStorage.getItem("telefono");
      const pais = sessionStorage.getItem("pais");
      const fechaEntrada = sessionStorage.getItem("fechaEntrada");
      const fechaSalida = sessionStorage.getItem("fechaSalida");
      const habitacion = sessionStorage.getItem("habitacion");
      const huespedes = sessionStorage.getItem("huespedes");
      const incluyeTour = sessionStorage.getItem("incluyeTour");

    let precioBaseHabitacion = 0;
    switch (habitacion) {
      case "Estandar":
        precioBaseHabitacion = 50;
        break;
      case "Doble":
        precioBaseHabitacion = 80;
        break;
      case "Suite":
        precioBaseHabitacion = 120;
        break;
    }

    const precioPorHuesped = 20;
    const precioTour = 40;
    const total = precioBaseHabitacion + (parseInt(huespedes) * precioPorHuesped) + (incluyeTour ? precioTour : 0);

    document.getElementById('total-pago').textContent = `$${total.toFixed(2)}`;

    const form = document.getElementById('formPago');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = "gracias.html"; 
    });
});
