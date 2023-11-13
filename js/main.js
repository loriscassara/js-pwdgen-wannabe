/*************** 
    CODE PASSWORD GENERATOR
***************/

const name = prompt('Scrivi il tuo nome'); //dichiarazione variabile "name"
//console.log('Il nome scritto:', name);
const surname = prompt('Scrivi il tuo cognome'); //dichiarazione variabile "surname"
//console.log('Il cognome scritto:', surname);
const prefColor = prompt('Scrivi il tuo colore preferito'); //dichiarazione variabile "preferite color"
//console.log('Il colore scritto:', prefColor);
let password = name + surname + prefColor + '#23'; //uniamo le variabili scelte dall'utente
//console.log('Pw generata:', pw);


document.querySelector('.pw-gen').innerHTML = `La tua password: ${password}`; //scrivo il risultato in pagina tramite in selettore