"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = __importDefault(require("./classes/Auto"));
var autoPeugeotModel206 = new Auto_1.default("Peugeot", "206", 4, "", 200000);
var autoHonda = new Auto_1.default("Honda", "Titan", 4, "125cc", 60000);
var autoPeugeotModel208 = new Auto_1.default("Peugeot", "208", 5, "", 250000);
var autoYamaha = new Auto_1.default("Yamaha", "YBR", 4, "160cc", 80500.50);
var autos = [autoPeugeotModel206, autoHonda, autoPeugeotModel208, autoYamaha];
var autoMasCaro = autos.filter(function (auto) { return auto.precio === Math.max.apply(Math, autos.map(function (auto) { return auto.precio; })); })[0];
var autoMasBarato = autos.filter(function (auto) { return auto.precio === Math.min.apply(Math, autos.map(function (auto) { return auto.precio; })); })[0];
var autoConLetraYEnModelo = autos.filter(function (auto) { return auto.modelo.indexOf("Y") > -1; })[0];
var autosOrdenadosPorPrecios = autos.sort(function (autoA, autoB) { return (autoB.precio - autoA.precio); });
var formatoMonedaRequerido = function (precio) {
    return precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('.', ',').replace(',', '.');
};
console.log("Marca: " + autoPeugeotModel206.marca + " // Modelo: " + autoPeugeotModel206.modelo + " // Puertas: " + autoPeugeotModel206.puertas + " // Precio: " + formatoMonedaRequerido(autoPeugeotModel206.precio));
console.log("Marca: " + autoHonda.marca + " // Modelo: " + autoHonda.modelo + " // Cilindrada: " + autoHonda.cilindrada + " // Precio: " + formatoMonedaRequerido(autoHonda.precio));
console.log("Marca: " + autoPeugeotModel208.marca + " // Modelo: " + autoPeugeotModel208.modelo + " // Puertas: " + autoPeugeotModel208.puertas + " // Precio: " + formatoMonedaRequerido(autoPeugeotModel208.precio));
console.log("Marca: " + autoYamaha.marca + " // Modelo: " + autoYamaha.modelo + " // Cilindrada: " + autoYamaha.cilindrada + " // Precio: " + formatoMonedaRequerido(autoYamaha.precio));
console.log('=============================');
console.log("Vehiculo mas caro: " + autoMasCaro.marca + " " + autoMasCaro.modelo);
console.log("Vehiculo mas barato: " + autoMasBarato.marca + " " + autoMasBarato.modelo);
console.log("Vehiculo que contiene en el modelo la letra \"y\": " + autoConLetraYEnModelo.marca + " " + autoConLetraYEnModelo.modelo + " " + formatoMonedaRequerido(autoConLetraYEnModelo.precio));
console.log('=============================');
console.log('Vehiculos ordenados por precio de mayor a menor:');
autosOrdenadosPorPrecios.forEach(function (auto) { return console.log(auto.marca + " " + auto.modelo); });
