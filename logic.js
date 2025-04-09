document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalReserva");
    const buttons = document.querySelectorAll(".card__button");
    const closeBtn = document.querySelector(".close");
  
    // Mostrar el modal al hacer clic en el botón
    buttons.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir navegación
        modal.style.display = "block";
      });
    });
  
    // Cerrar modal al hacer clic en la X
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
    // Cerrar al hacer clic fuera del modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  