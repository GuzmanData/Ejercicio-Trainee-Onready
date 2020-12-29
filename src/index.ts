import Auto from './classes/Auto';

let autoPeugeotModel206 = new Auto("Peugeot", "206", 4, "", 200000);
let autoHonda = new Auto("Honda", "Titan", 4, "125cc", 60000);
let autoPeugeotModel208 = new Auto("Peugeot", "208", 5, "", 250000);
let autoYamaha = new Auto("Yamaha", "YBR", 4, "160cc", 80500.50);


let autos: Auto[] = [autoPeugeotModel206, autoHonda, autoPeugeotModel208, autoYamaha];

const autoMasCaro = autos.filter(auto => auto.precio === Math.max.apply(Math, autos.map(auto => { return auto.precio; })))[0];
const autoMasBarato = autos.filter(auto => auto.precio === Math.min.apply(Math, autos.map(auto => { return auto.precio; })))[0];
const autoConLetraYEnModelo = autos.filter(auto => auto.modelo.indexOf("Y") > -1)[0];
const autosOrdenadosPorPrecios = autos.sort((autoA, autoB) => (autoB.precio - autoA.precio));


let formatoMonedaRequerido =  (precio: number) => {
    return precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('.', ',').replace(',', '.')

}

console.log(`Marca: ${autoPeugeotModel206.marca} // Modelo: ${autoPeugeotModel206.modelo} // Puertas: ${autoPeugeotModel206.puertas} // Precio: ${formatoMonedaRequerido(autoPeugeotModel206.precio)}`);
console.log(`Marca: ${autoHonda.marca} // Modelo: ${autoHonda.modelo} // Cilindrada: ${autoHonda.cilindrada} // Precio: ${formatoMonedaRequerido(autoHonda.precio)}`);
console.log(`Marca: ${autoPeugeotModel208.marca} // Modelo: ${autoPeugeotModel208.modelo} // Puertas: ${autoPeugeotModel208.puertas} // Precio: ${formatoMonedaRequerido(autoPeugeotModel208.precio)}`);
console.log(`Marca: ${autoYamaha.marca} // Modelo: ${autoYamaha.modelo} // Cilindrada: ${autoYamaha.cilindrada} // Precio: ${formatoMonedaRequerido(autoYamaha.precio)}`);

console.log('=============================');

console.log(`Vehiculo mas caro: ${autoMasCaro.marca} ${autoMasCaro.modelo}`);
console.log(`Vehiculo mas barato: ${autoMasBarato.marca} ${autoMasBarato.modelo}`);
console.log(`Vehiculo que contiene en el modelo la letra "y": ${autoConLetraYEnModelo.marca} ${autoConLetraYEnModelo.modelo} ${formatoMonedaRequerido(autoConLetraYEnModelo.precio)}`);

console.log('=============================');
console.log('Vehiculos ordenados por precio de mayor a menor:');
autosOrdenadosPorPrecios.forEach(auto => console.log(`${auto.marca} ${auto.modelo}`))

