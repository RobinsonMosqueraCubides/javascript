class Libro {
    constructor(titulo, autor, añoPublicacion) {
      this.titulo = titulo;
      this.autor = autor;
      this.añoPublicacion = añoPublicacion;
    }
  
    obtenerInformacion() {
      return `${this.titulo} - ${this.autor} (${this.añoPublicacion})`;
    }
  }
  
  let miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
  console.log(miLibro.obtenerInformacion());
  