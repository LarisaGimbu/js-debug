/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// 1- Questo codice esegue un ciclo for, la variabile let parte da 0
// 2- No, il codice non presenta errori di sintassi
// 3- Si, il codice dice di eseguire il ciclo fintanto che i è maggiore di 5 ma essendo che i parte da 0 non sarà mai superiore a 5, la condizione è quindi già in partenza falsa e il ciclo non avviene.
for (let i = 0; i < 5; i++) {
    console.log('primo es',i);
}


// ESERCIZIO 2
// 1- Questa funzione controlla se un numero è pari o meno (quindi se diviso 2 da resto 0), se il numero è pari gli aggiunge 5 altrimenti ce lo restituisce così com'è
// 2- Il codice presenta un errore di sintassi in quanto mette un solo '=' usato quando le variabili assumono un valore invece che due o tre per indicare uguaglianza.
// 3- Non sono presenti errori logici.

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
// 1- Questa funzione esegue un ciclo for fin quando il valore di i è inferiore a 5
// 2- Fra la variabile contatore e la condizione ci va ; non invece della semplice ,
// 3- Non sono presenti errori logici

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// 1- Questa funzione dovrebbe prendere i numeri pari da un array e pusharli in un altro array creato quindi da soli numeri pari
// 2- i due ';' fuori posto nel ciclo for e nell'if e l'uguale nella condizione dell'if
// 3- Nella condizione del for i deve essere < o = alla lunghezza di numbers meno uno altrimenti escludiamo l'ultimo numero; inoltre nell'if il numero da dividere per due lo prendiamo dall'array grazie alla variabile i e sempre grazie ad essa lo pushamo in evenNumbers.

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
console.log(displayEvenNumbers());; // dovrebbe restituire [2,4,6,8]