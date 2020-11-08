let numeros = [1, 8, 4, 2, 7, 10, 3, 5];


 for (let i = 0; i < numeros.length; i++) {
     console.log(numeros[i] % 2)

     if ( (numeros[i] % 2) === 0 ){
         
          console.log("El " +numeros[i] +" es par")
     } else {

          console.log("El "+numeros[i] +" es impar")
     }


}