/* 
Cree un algoritmo que permita determinar 
la calificacion en letras de un alumno 

Si la nota se encuentra entre 100 a 90 = A
Si la nota se encuentra entre 80 a 89 = B
Si la nota se encuentra entre 70 a 79 = C
Si la nota se encuentra entre 60 y 69 = D
Si la nota es inferior a 60 = F
*/
let nota = 78;
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