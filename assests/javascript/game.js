let wins = 0

let losses = 0

let guessesleft = 9

const userWins = document.getElementById("user-wins");

const userLost = document.getElementById("user-losses");

const userGuessesLeft = document.getElementById("user-guesses-left");

const userChoose = document.getElementById("user-choose");

let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let guessedLetters = [];

//  this is my reset function that should run when guesses left = 0 and should reset the guessed letters...if i could get the guessed letters part working.

const reset = function () {
    guessesleft = 9;
    guessedLetters = [];
}



document.onkeyup = function (event) {

    const userGuess = event.key;
    //   here the computer grabs a random letter from our computer choices array
    const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    guessedLetters.push(userGuess)
    

    userChoose.textContent = "you choose: " + userGuess;


    if (userGuess === computerGuess) {

        wins++;

    }

    else {
        guessesleft--;
    }

    if (guessesleft === 0) {
        losses++;
        reset();

    }

    userWins.textContent = "wins: " + wins;
    userLost.textContent = "losses: " + losses;
    userChoose.textContent = ("you choose: " + guessedLetters);
    userGuessesLeft.textContent = "guesses left: " + guessesleft;


};