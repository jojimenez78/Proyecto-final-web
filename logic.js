document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalReserva");
    const buttons = document.querySelectorAll(".card__button");
    const closeBtn = document.querySelector(".close");
  
    
    buttons.forEach(button => {
      button.addEventListener("click", function (e) {
        e.preventDefault(); 
        modal.style.display = "block";
      });
    });
  
   
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  