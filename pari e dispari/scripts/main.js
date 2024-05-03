// Chied0 all'utente di scegliere "pari" o "dispari"
let sceltaUtente = prompt("Scegli 'pari' o 'dispari':");

// Chiedo all'utente di inserire un numero tra 1 e 5
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5:"));

// Genero un numero casuale per il computer
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}
let numeroComputer = generaNumeroCasuale();

// Calcolo la somma dei numeri
let somma = numeroUtente + numeroComputer;

// Comunico il risultato all'utente
alert("Il tuo numero: " + numeroUtente + "\nNumero del computer: " + numeroComputer + "\nSomma dei numeri: " + somma);

// Verifica se la somma è pari o dispari e determinazione del vincitore
if (somma % 2 === 0) {
  
