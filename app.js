//Variables
let numeroMaximoPosible = 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;
//let palabrasVeces = 'vez';

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:"));
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else {
        if (numeroUsuario > numeroSecreto){
        alert('El numero secreto es menor');
    } else {
        alert('El numero secreto es mayor')
    }
    intentos = intentos + 1;
    //palabrasVeces = 'veces';
    if (intentos > 10){
        alert('Llegaste al numero maximo de intentos');
        break;
    }

}
}
