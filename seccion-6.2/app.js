
class Carro {

    constructor(marca, tipo, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = "hoy";
        this.encendido = false;
        this.gasolina = 100;
    }
    encenderCarro() {
        this.encendido = true;
        console.log("El carro esta encendido");
    }
    apagarCarro() {
        this.encendido = true;
        console.log("El carro esta apagado");

    }
    estadoDelCarro() {
        if (this.encendido) {
            console.log("El coche esta enbcendido");
        }
        else {

            console.log("El coche esta apagado");
        }
    }

    realizarViaje(consumo) {

        if (this.encendido) {
            if (consumo > this.gasolina) {
                console.log("No puedo realizar el viaje:gasolina" + this.gasolina);
            } else {
                this.gasolina = this.gasolina - consumo;

            }
        }
        else {
            console.log("El carro esta apagado")
        }
        this.gasolina = this.gasolina - consumo;

        return "Le queda " + this.gasolina;

    }

}
let carro = new Carro("Masda", "sedan", 2);

console.log(carro);
