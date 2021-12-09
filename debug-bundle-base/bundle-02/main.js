/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// 1- La funzione controlla l'età myAge, in base ad essa message assume un valore differente, 'sei troppo giovane' se ha meno di 18 anni altrimenti 'hai più di 18 anni'
// 2- Manca il this prima di message
// 3- Manca il return del messaggio 

function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        this.message = `Sei troppo giovane! Hai ${myAge} anni!`;
    }else{
        this.message = 'Hai più di 18 anni!';
    }

    return this.message
}
console.log(checkAge());

// ESERCIZIO 2
// 1- Questa funzione conta quanti elementi ha l'array dei colori
// 2- era sbagliata la sintassi della parola length
// 3- Non sono presenti errori logici

function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
console.log(printColorsNumber());


// ESERCIZIO 3
// 1- Dopo aver chiesto all'utente di inserire un numero ad esso aggiunge 12 e ce lo restituisce
// 2- Se non aggiungiamo parseInst all'userNumber esso verrà letto come stringa non come numero
// 3- Non ci sono errori logici

// function addNumbers() {
// const userNumber = prompt('Inserisci un numero');
//     const total = parseInt(userNumber) + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// console.log(addNumbers());;


// ESERCIZIO 4
// 1- Una volta inserita la nostra mail controlla se è inclusa nell'addresses, nel caso lo fosse ci restituisce 'Accesso consentito' altrimenti ci restituisce 'Accesso negato'
// 2- Non ci sono errori di sintassi
// 3- Nell'ultimo if essendo un booleano basta scrivere solo grantAccess che automaticamente significa che è vera

// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     console.log(addresses);
//     console.log(userEmail);

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     console.log(grantAccess);

//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// console.log(checkAccess());


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// 1- Una volta inserita la nostra mail controlla tutte le mail presenti in addresses e se una di queste è uguale alla nostra allora grantAccess diventa true e ci restituisce 'Accesso consentito' altrimenti ci restituisce 'Accesso negato'
// 2- Mancava una parentesi graffa in chiusura del ciclo for 
// 3- Non sono presenti errori logici

function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
        }
        
        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
console.log(checkAccessImproved());