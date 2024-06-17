/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* 
 1. Datatype di tipo string: indica i valori inseriti in caratteri di testi, dalla singola lettera all'intero capitolo di un libro. 
Deve essere contenuto SEMPRE dagli apici, preferibilmente da quelli doppi (aka: virgolette), e il valore è case sensitive.
 2. Datatype di tipo number: indica i valori inseriti in numeri, e accetta sia numeri interi che decimali. Viene scritto SENZA apici.
 3. Datatype di tipo boolean: ha solo due valori: true e false, indicati senza apici. Serve a verificare se un processo accade o meno
e, con le dovute aggiunte, come comportarsi di conseguenza.
 4. Datatype di tipo null: indica l'assenza intenzionale di valore, che è diverso da indicare 0.
 5. Datatype di tipo undefined: indica un valore al momento non ancora definito ma che verrà indicato in un secondo momento.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Michelepaolo";
console.log(myName);

// Avevo inizialmente inserito let come variabile, in seguito modificata in const per l'esercizio 4

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let myNumber = 12;
let myNumber1 = 20;
let mySum = (myNumber + myNumber1);
console.log("risultato: " + mySum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Renzi";
console.log(myName);

const myConst = "Paperino";
console.log(myConst);
//myConst= "Pietro" dà errore alla pagina poichè const non può cambiare valore.


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let myNumber2 = 4
x -= myNumber2
console.log("risultato: " + x)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
const verify = name1 !== name2 ? "name1 è diverso da name2" : "name1 è identico a name2";
console.log(verify)


