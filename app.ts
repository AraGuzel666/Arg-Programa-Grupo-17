class Persona {
    nombre: string;
    apellido: string;
    constructor(nombre:string, apellido:string) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
    saludar():string {
      return this.nombre + ' ' + this.apellido;
    }
  }
let robert:Persona = new Persona("Robertito", "CuloAbierto");

console.log(robert.nombre)
console.log(robert.apellido);
