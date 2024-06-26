//variables 
let numeroSecreto = 4;
let numeroDeUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while (numeroDeUsuario != numeroSecreto) {
    numeroDeUsuario = prompt("Me indicas un Numero entre 1 y 10 por favor");

    console.log(numeroDeUsuario);
    /*este es una prueba 
    */
    if(numeroDeUsuario == numeroSecreto){
    //Acertamos fue verdadera la condicion 
        alert(`Acertaste el numero es : ${numeroDeUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    }else {
        if(numeroDeUsuario > numeroSecreto){
           alert('El numero secreto es menor');
        } else {
           alert('El numero secreto es mayor');
        }
    //La condincion no se cumplio 
    //alert('Lo siento , no acertaste el numero')
    }
    intentos = intentos + 1;
    palabraVeces = "veces";
}