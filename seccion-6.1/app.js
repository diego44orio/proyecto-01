
let persona1 = {
    nombre: "Diego",
    edad: 17,
    estatura: 1.72
};
let persona2 = {
    nombre: "Daniel",
    edad: 24,
    estatura: 1.76
};
let persona3 = {
    nombre: "David",
    edad: 20,
    estatura: 1.78
};

let personas = [persona1,persona2,persona3];

// console.log(personas);

for(let i=0;i<=2;i++){

console.log(personas[i].nombre,"--",personas[i].edad);
}