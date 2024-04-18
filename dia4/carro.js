class Carro {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    acelerar() {
      console.log("El Carro está acelerando...");
    }
  
    frenar() {
      console.log("El Carro está frenando...");
    }
  }
  
  let miCarro = new Carro("Toyota", "Corolla", 2022);
  miCarro.acelerar();
  miCarro.frenar();
  