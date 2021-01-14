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

for (var i = 0; i < 5; i++) {
  var numeri = random(1, 50);

  array.push(numeri);
}

alert(array);
console.log(array);
setTimeout(function() {
  for (var i = 0; i < array.length; i++) {
    var n = parseInt(prompt('type'));
    arrayUser.push(n);
  }
  console.log(arrayUser);
}, 2000);

if (arrayUser.includes(array[i])) {
  console.log('sth came out');
}



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
