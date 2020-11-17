var userScore = Math.floor((Math.random()* 6 ) + 1);
var cpuScore = Math.floor((Math.random()* 6 ) + 1);

var message;
var victory, draw, defeat = 0;

if (userScore > cpuScore){
  message = "Hai vinto " + userScore + " a " + cpuScore;
  victory++;
} else if (userScore == cpuScore) {
  message = "Hai pareggiato " + userScore + " a " + cpuScore;
  draw++;
} else {
  message = "Hai perso " + userScore + " a " + cpuScore;
  defeat++;
}

var messageOutput = document.getElementById("message");
messageOutput.innerHTML = message;

/* var victoryOutput = document.getElementById("victory");
var drawOutput = document.getElementById("draw");
var defeatOutput = document.getElementById("defeat");
victoryOutput.innerHTML = victory;
drawOutput.innerHTML = draw;
defeatOutput.innerHTML = defeat;
 */
