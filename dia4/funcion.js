class FuncionMatematica {
    constructor() {}
  
    sumar(a, b) {
      return a + b;
    }
  
    restar(a, b) {
      return a - b;
    }
  }
  
  const operacionesMatematicas = new FuncionMatematica();
  console.log("Suma:", operacionesMatematicas.sumar(5, 3));
  console.log("Resta:", operacionesMatematicas.restar(10, 4));
  