

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
      case "individual":
        precioBaseHabitacion = 50000;
        break;
      case "Doble":
        precioBaseHabitacion = 80000;
        break;
      case "Suite":
        precioBaseHabitacion = 190000;
        break;
        case "cuadruple":
          precioBaseHabitacion = 140000;
          break;
          case "familiar":
            precioBaseHabitacion = 160000;
            break;
            case "tematica":
              precioBaseHabitacion = 170000;
              break;    
            
    }

    const precioPorHuesped = 20000;
    const precioTour = 40000;
    const total = precioBaseHabitacion + (parseInt(huespedes) * precioPorHuesped) + (incluyeTour ? precioTour : 0);

    document.getElementById('total-pago').textContent = `$${total.toFixed(2)}`;

    const form = document.getElementById('formPago');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = "gracias.html"; 
    });
});
