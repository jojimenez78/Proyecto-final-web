class Reserva {
    constructor(nombre, habitacion, tour, fechaEntrada, fechaSalida) {
      this.nombre = nombre;
      this.habitacion = habitacion;
      this.tour = tour;
      this.fechaEntrada = new Date(fechaEntrada);
      this.fechaSalida = new Date(fechaSalida);
    }
  
    calcularDias() {
      const diff = this.fechaSalida - this.fechaEntrada;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
  
    calcularPrecio() {
      const precios = {
        individual: 50,
        doble: 80,
        suite: 120
      };
      const precioPorNoche = precios[this.habitacion] || 0;
      const dias = this.calcularDias();
      return dias * precioPorNoche;
    }
  
    guardarEnSession() {
      const total = this.calcularPrecio();
      sessionStorage.setItem("totalPagar", total);
    }
  }
  