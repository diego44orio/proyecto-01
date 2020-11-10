

function max(a,b,c){

let mayor;

if (a > c){

     if(a >b){
           mayor= a;

     }else{

           mayor = b;

     }
    
   
}else{

     if(c > b){
          mayor = c;
     }else{
          mayor = b;

     } 
}
return mayor;
}


let mayor = max(10,2,1);


console.log(mayor);