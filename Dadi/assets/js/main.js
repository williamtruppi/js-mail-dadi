//creo le due variabili che conterranno i numeri casuali da 1 a 6
var userScore = Math.floor((Math.random()* 6 ) + 1);
var cpuScore = Math.floor((Math.random()* 6 ) + 1);

//creo una variabile che conterrà il risultato del gioco
var message;

//controllo delle due variabili generate casualmente
if (userScore > cpuScore){
  message = "Hai vinto " + userScore + " a " + cpuScore;
} else if (userScore == cpuScore) {
  message = "Hai pareggiato " + userScore + " a " + cpuScore;
} else {
  message = "Hai perso " + userScore + " a " + cpuScore;
}

//invio del risultato al codice html
var messageOutput = document.getElementById("message");
messageOutput.innerHTML = message;


