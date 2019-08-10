var word = require("./word.js");
var inquirer = require("inquirer");
var totalStrikes = 5;

var validLetters = "abcdefghijklmnopqrstuvwxyz";


var wordList = ["deathstar", "tatooine", "x wing", "yoda", "luke skywalker", "darth vader", "tie fighter", "yavin iv", "lightsaber", "han solo", "greedo", "corellia", "dagobah", "chewbacca", "tuskin raider"];

var i = Math.floor(Math.random() * wordList.length);
console.log("random word: " + wordList[i])
var theWord = wordList[i];
starWord = new word(theWord);

console.log("---------------------------------------------------");
console.log("Welcome to Star Words V - The Console Strikes Back!");
console.log("---------------------------------------------------");
var newGame = false;

var correctLetters = [];
var incorrectLetters = [];

//starWord.stringTheWord()

runGame = function () {

    if (newGame) {
        console.log("---------------------------------------------------");
        console.log("Welcome to Star Words V - The Console Strikes Back!");
        console.log("---------------------------------------------------");

        var i = Math.floor(Math.random() * wordList.length);
        console.log("random word: " + wordList[i])
        var theWord = wordList[i];
        starWord = new word(theWord);

        newGame = false;
        //starWord.stringTheWord()
    }
    var wordComplete = [];
    starWord.wordArray.forEach(completeCheck);

    if (wordComplete.includes(false)) {
        // Prompt the user to start guessing
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Type a letter [a-z] to guess the word: ",
                    name: "userinputut"
                }
            ])
            .then(function (iResponse) {
                //console.log("User selected: " + iResponse.userinputut)
                if (!validLetters.includes(iResponse.userinputut) || iResponse.userinputut.length > 1) {
                    console.log("Please try again!")
                    runGame();
                } else {
                    if (incorrectLetters.includes(iResponse.userinputut) || correctLetters.includes(iResponse.userinputut) || iResponse.userinputut === "") {
                        console.log("Letter already guessed or nothing entered")
                        runGame();
                    } else {
                           // Check if the guess is correct
                        var wordCheckArray = [];
                        starWord.userGuess(iResponse.userinputut)

                        starWord.wordArray.forEach(wordCheck)

                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(iResponse.userinputut);
                            totalStrikes--;
                        } else {
                            console.log("\nCorrect!\n");
                            correctLetters.push(iResponse.userinputut);
                        }

                        starWord.stringTheWord()

                        console.log("Strikes remaining: " + totalStrikes);
                        console.log("Letters Guessed: " + incorrectLetters.join(" "))
                        console.log("correct letters: " + correctLetters.join(" "))

                        if (totalStrikes > 0) {
                            runGame();
                        } else {
                            console.log("Sorry, you have struck out!")
                            restartGame();
                        }

                        function wordCheck(key) {
                            wordCheckArray.push(key.foundLetter);
                        }
                    }
                }
            })

    } else {
        console.log("Congratulations, you win!")
        restartGame();
    }

    function completeCheck(key) {
        wordComplete.push(key.foundLetter);
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
    ]).then(function (response) {
        if (response.restart == "Yes") {
            newGame = true;
            incorrectLetters = [];
            correctLetters = [];
            totalStrikes = 5;
            runGame();
        } else {
            return;
        }
    })
}


runGame();