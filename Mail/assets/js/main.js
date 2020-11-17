// creazione array con tre email al suo interno
var mailList = ["batman@gmail.com", "superman@hotmail.it", "iamironman@libero.it"];
console.log(mailList);

//creazione variabile per il btn 
var btnInvio = document.getElementById("btn_invio");

// dichiarazione di una variabile messaggio da mostrare a schermo
var message;
var emailFound;

btnInvio.addEventListener("click", function (){

  //acquisizione email da confrontare
  var emailInput = document.getElementById("user_email").value;
  console.log(emailInput);

  // ciclo for per effettuare il controllo della lista
  for (var i = 0; i <= mailList.length; i++) {
    
    if (emailInput == mailList[i]){
      emailFound = true;
      break;
    } else {
      emailFound = false
    }
  }


  if (emailFound == true) {
    message = "L'email per il ripristino della password è stata inviata";
  } else {
    message = "email non trovata";
  }

  var messageOutput = document.getElementById("message");
  messageOutput.innerHTML = message;

});

console.log("il ciclo è terminato");