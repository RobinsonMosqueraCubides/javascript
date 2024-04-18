
class Numero {
    constructor(valor) {
      this.valor = valor;
    }
  
    esPar() {
      return this.valor % 2 === 0;
    }
  
    esPrimo() {
      if (this.valor <= 1) return false;
      for (let i = 2; i <= Math.sqrt(this.valor); i++) {
        if (this.valor % i === 0) return false;
      }
      return true;
    }
  
    obtenerFactorial() {
      let factorial = 1;
      for (let i = 2; i <= this.valor; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  const miNumero = new Numero(7);
  console.log("¿Es par?", miNumero.esPar());
  console.log("¿Es primo?", miNumero.esPrimo());
  console.log("Factorial:", miNumero.obtenerFactorial());
  