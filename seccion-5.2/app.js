//Crear una funcion que me permita determinar 
//la calificacion de 3 alumnos
//uno con una nota de 100, otro con una nota de 80
//y el ultimo con una nota de 59

function calcularNota(nota){

  


let notaletra ="";
console.log(nota+" es igual a  "+notaletra)

if (nota >=90){
    
    console.log ("A");
}
if (nota <=89 && nota >=80){
    console.log("B")
}
if (nota <=79 && nota >=70){
    console.log("C")
}
if (nota <=69 && nota >=60){
    console.log("D")
}
if (nota <=59){
    console.log("F")
}

}



calcularNota(100);
calcularNota(6);
calcularNota(59);
calcularNota(79);
calcularNota(-200)