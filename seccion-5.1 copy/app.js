
function imprimirTabla(base ,limite){


    for (let j= 1 ; j <= limite ; j++){
        let resultado = 10 * j;    
        console.log(base + " x " + j + " = " + resultado);

    }    

}
imprimirTabla(10, 5);
imprimirTabla(3, 10);
