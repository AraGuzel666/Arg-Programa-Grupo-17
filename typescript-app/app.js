"use strict";
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        return this.nombre + ' ' + this.apellido;
    }
}
let robert = new Persona("Robertito", "CuloAbierto");
console.log(robert.nombre);
console.log(robert.apellido);
