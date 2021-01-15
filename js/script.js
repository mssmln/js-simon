// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Esce l'alert coi numeri da memorizzare; :memo:
// L'utente memorizza (o cerca di memorizzare) i numeri; :confounded:
// L'utente chiude l'alert; :open_mouth:
// L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri :stuck_out_tongue:
// L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:


var numeriCasuali = [];
var numeriIndovinati = [];
var numeriGiaDigitati = [];

for (var i = 0; numeriCasuali.length < 5; i++) {
  var numeri = random(1, 10);
  if (!numeriCasuali.includes(numeri)) {
    numeriCasuali.push(numeri);
  }
}
alert(numeriCasuali);
console.log(numeriCasuali);

setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    var insert = parseInt(prompt('key in numbers you saw'));

    // until
    while (insert < 1 || insert > 10 || isNaN(insert)) {
      alert('solo numeri tra 1 e 10');
      insert = parseInt(prompt('again, key in numbers you saw'));
    }
    // until
    while (numeriGiaDigitati.includes(insert)) {
      alert('number already typed, try again');
      insert = parseInt(prompt('key in numbers you saw'));
    }
    if ((!numeriIndovinati.includes(insert)) && (numeriCasuali.includes(insert)) ){
      numeriIndovinati.push(insert);
    }
    // else {
    //   numeriGiaDigitati.push(insert);
    // }
    // se avessi messo numeriGiaDigitati.push(insert); nella condizione if come else,
    // il secondo while avrebbe funzionato solo al 3 inserimento del numero e non al 2
    numeriGiaDigitati.push(insert);
  }

  console.log('indovinati: ' + numeriIndovinati.length + ' e sono: ' + numeriIndovinati);
  console.log('tutti i digitati: ' + numeriGiaDigitati);
}, 2000);


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
