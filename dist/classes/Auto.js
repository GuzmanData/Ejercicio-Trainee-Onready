"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, puertas, cilindrada, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
        this.cilindrada = cilindrada;
        this.precio = precio;
        // Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
        // Marca: Honda // Modelo: Titan // Cilindrada: 125cc // Precio: $60.000,00
        // Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
        // Marca: Yamaha // Modelo: YBR // Cilindrada: 160cc // Precio: $80.500,50
    }
    return Auto;
}());
exports.default = Auto;
