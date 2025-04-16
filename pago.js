document.addEventListener('DOMContentLoaded', () => {
    const habitacion = sessionStorage.getItem("habitacion") || "No especificada";
    const huespedes = sessionStorage.getItem("huespedes") || "0";
    const incluyeTour = sessionStorage.getItem("incluyeTour") === "true";
  
    document.getElementById("resumenHabitacion").textContent = habitacion;
    document.getElementById("resumenHuespedes").textContent = huespedes;
    document.getElementById("resumenTour").textContent = incluyeTour ? "Sí" : "No";
  
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
  