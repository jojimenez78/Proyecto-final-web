document.addEventListener("DOMContentLoaded", () => {
    const total = sessionStorage.getItem("totalPagar");
    document.getElementById("total-pago").textContent = `$${total} USD`;
  });
  