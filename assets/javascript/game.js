var computerChoices = ["a", "b", "c", "d",
"e", "f", "g", "h",
"i", "j", "k", "l",
"m", "n", "o", "p",
"q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuessesSoFar = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d")
|| (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h")
|| (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l")
|| (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p")
|| (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t")
|| (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x")
|| (userGuess === "y") || (userGuess === "z")) {

if ((userGuess === "a") && (computerGuess === "a")) {
wins++
if (false)  losses ++;
} 
else if ((userGuess === "b") && (computerGuess === "b")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "c") && (computerGuess === "c")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "d") && (computerGuess === "d")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "e") && (computerGuess === "e")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "f") && (computerGuess === "f")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "g") && (computerGuess === "g")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "h") && (computerGuess === "h")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "i") && (computerGuess === "i")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "j") && (computerGuess === "j")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "k") && (computerGuess === "k")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "l") && (computerGuess === "l")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "m") && (computerGuess === "m")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "n") && (computerGuess === "n")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "o") && (computerGuess === "o")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "p") && (computerGuess === "p")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "q") && (computerGuess === "q")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "r") && (computerGuess === "r")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "s") && (computerGuess === "s")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "t") && (computerGuess === "t")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "u") && (computerGuess === "u")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "v") && (computerGuess === "v")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "w") && (computerGuess === "w")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "x") && (computerGuess === "x")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "y") && (computerGuess === "y")) {
wins++
if (false) losses ++;
} 
else if ((userGuess === "z") && (computerGuess === "z")) {
wins++
if (false) losses ++;
}
// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
"<p>Guess what letter I'm thinking of..</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Your Guesses so far: " + userGuess + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.getElementById("game").innerHTML = html;
}
};

// Keep track of what keys user press
// Give user 10 tries to guess what computer is thinking