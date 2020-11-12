
function masLargo(arr){


    let auxiliar = " ";
    for(let i = 0; i <arr.length; i++){

        
        if(auxiliar.length < arr[i].length){
   
            auxiliar = arr[i]
        }
    }
       
    console.log("El nombre mas largo es: "+auxiliar);

}

let heroes = ["Deadpo", "Ciclope", "Magneto", "Profesor Charles Xavier"];

masLargo(heroes);