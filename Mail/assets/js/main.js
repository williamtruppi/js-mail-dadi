// creazione array con tre email al suo interno
var mailList = ["batman@gmail.com", "superman@hotmail.it", "iamironman@libero.it"];
console.log(mailList);

//acquisizione email da confrontare
var emailInput = document.getElementById("user_email");
console.log(emailInput);



// ciclo for per effettuare il controllo della lista
for (var i = 0; i <= 2; i++) {
  
  if (emailInput == mailList[i]){
    console.log("La tua email è presente nella lista");
    break;
  } else {
    console.log("la tua email NON è presente nella lista");
  }
}

console.log("il ciclo è terminato");