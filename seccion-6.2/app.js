

let carro1 = {
    marca:"Toyota",
    tipo: "sedan",
    puertas: 3,
    creadoEn:"hoy"
};
class Carro {

    constructor(marca,tipo,puertas) {
         this.marca = marca;
         this.tipo = tipo;
         this.puertas = puertas;

         this.creadoEn = "hoy";
    }


}
let carro2 = new Carro("Masda","sedan",2);

console.log(carro1);
console.log(carro2);
