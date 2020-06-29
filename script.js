
var parola = prompt();
var parolaInvertita = "";

for (var i = parola.length - 1; i>=0; i--){
  parolaInvertita += parola[i];
}

console.log(parolaInvertita);

if (parola == parolaInvertita){
  console.log("Questa parola è palindroma");
} else {
  console.log("Questa parola non è palindroma");
}




// PARI E DISPARI
// L’utente sceglie pari o dispari
// var pari = document.getElementById('pari');
// var dispari = document.getElementById('dispari');
// //  inserisce un numero da 1 a 5.
// var numUtente = parseInt(document.getElementById('numeroUtente'));
// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// var numCpu = numRandom(1);
//
//
// console.log(numUtente);
// console.log(numCpu);
//
// // FUNZIONI
// function numRandom(num) {
//   var num = Math.floor(Math.random()* 5) +1;
// }
