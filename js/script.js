// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Esce l'alert coi numeri da memorizzare; :memo:
// L'utente memorizza (o cerca di memorizzare) i numeri; :confounded:
// L'utente chiude l'alert; :open_mouth:
// L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri :stuck_out_tongue:
// L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:

var array = [];
var arrayUser = [];

while (array.length < 5) {
  var numeri = random(1, 10);
  if (!array.includes(numeri) ) {
    array.push(numeri);
  }
}
// for (var i = 0; i <= 5; i++) {
//
// }

alert(array);
console.log(array);
setTimeout(function() {

  while (array.length < 5) {
    var n = parseInt(prompt('type'));
    if ( (array.includes(n) ) && !(arrayUser.includes(n) ) ) {
      arrayUser.push(n);

    }

  }
  // for (var i = 0; i < array.length; i++) {
  //   var n = parseInt(prompt('type'));
  //   if ( (array.includes(n) ) && !(arrayUser.includes(n) ) ) {
  //     arrayUser.push(n);
  //
  //   }
  //   if (arrayUser.includes(n)) { // la condizione if va necessariamente dentro il for, lo eseguirebbe subito se fosse fuori visto che il for è asincrono per mezzo di setTimeout
  //
  //     document.getElementById('indovinati').innerHTML = 'you guessed ' + arrayUser;
  //     document.getElementById('totali').innerHTML = 'totale numeri indovinati ' + arrayUser.length;
  //   }
  // }
  console.log(arrayUser);
}, 2000);







function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
