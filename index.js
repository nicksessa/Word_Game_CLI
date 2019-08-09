var word = require("./word");
var inquirer = reqire("inquirer");
var totalStrikes = 5;
var foundLetters = [];
var incorrectLetters = [];
var validLetters = "abcdefghijklmnopqrstuvwxyz";

var wordList = ["deathstar", "tatooine", "x wing", "yoda",
    "luke skywalker", "darth vader", "tie fighter", "yavin iv", "lightsaber",
    "han solo", "greedo", "corellia", "dagobah", "chewbacca",
    "tuskin raider"]

getRandomWord = function () {
    var i = Math.floor(Math.random() * wordList.length);
    console.log("random word: " + wordList[i])
    return wordList[i]
}

var newGame = true;

runGame = function () {
    if (newGame) {
        // get the random word
        var theWord = getRandomWord()
        //use the random word to create a new instance
        var starWord = new Word(theWord)
        newGame = false;
    }
}


restartGame = function () {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again? ",
            choices: ["Yes", "No"],
            name: "restart"
        }
    ]).then(function(response) {
        if (response.restart == "Yes") {
            newGame = true;
            incorrectLetters = [];
            foundLetters = [];
            totalStrikes = 5;
            runGame();
        } else {
            return;
        }
    })
}




// Prompt the user to start guessing
inquirer.prompt([
    {
        type: "input",
        message: "Type a letter to guess the word: ",
        name: "letter"
    }
])
    .then(function (iResponse) {
        console.log("User selected: " + iResponse.letter)

    })