// Funzione per verificare se una parola è palindroma
function palindrome(inputWord) {
    const length = inputWord.length;  // Calcola la lunghezza della stringa
    for (let i = 0; i < length / 2; i++) {  // Verifica solo fino alla metà della stringa
        if (inputWord[i] !== inputWord[length - 1 - i]) {
            return false;  // Se i caratteri non corrispondono, non è palindroma
        }
    }
    return true;  // Se il ciclo termina senza trovare differenze, la parola è palindroma
}

// Esecuzione della verifica palindroma dopo l'input dell'utente
const userInput = prompt("Inserisci una parola per verificare se è palindroma:");

// Valuta se l'input è palindromo
const result = palindrome(userInput);

// Prepara il messaggio di risposta e visualizza il risultato
let message;
if (result) {
    message = "La parola è palindroma.";
} else {
    message = "La parola non è palindroma.";
}
alert(message);
