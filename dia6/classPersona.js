class persona {
    constructor(nombre, pais, edad){
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
    edad(){
        console.log(`Tengo ${this.edad} y vivo en ${this.pais}`);
    }
}

const persona1 = new persona('Juan', 'Colombia', 25);
persona1.saludar();
persona1.edad();