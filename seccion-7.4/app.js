let numeros = [1, 8, 4, 2, 7, 10, 3, 5];

let auxiliar= 0
 for (let i = 0; i < numeros.length; i++) {

   if (auxiliar<=numeros[i]){

        auxiliar = numeros[i]
   }
}
 console.log("El numero mayor es:" + auxiliar );