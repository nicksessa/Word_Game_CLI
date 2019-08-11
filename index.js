var word = require("./word.js");
var inquirer = require("inquirer");
var totalStrikes = 5;

var validLetters = "abcdefghijklmnopqrstuvwxyz";


var wordList = ["deathstar", "tatooine", "x wing", "yoda", "luke skywalker", "darth vader", "tie fighter", "yavin iv", "lightsaber", "han solo", "greedo", "corellia", "dagobah", "chewbacca", "tuskin raider"];

var i = Math.floor(Math.random() * wordList.length);
//console.log("random word: " + wordList[i])
var theWord = wordList[i];
starWord = new word(theWord);

console.log("---------------------------------------------------");
console.log("Welcome to Star Words V - The Console Strikes Back!");
console.log("---------------------------------------------------");
var newGame = false;

var correctLetters = [];
var incorrectLetters = [];

// Call stringTheWord so that the underscores are more readable on the screen.
// This gives the user a chance to see how many letters are in the word
// before guessing.
starWord.stringTheWord()

runGame = function () {

    if (newGame) {
        console.log("---------------------------------------------------");
        console.log("Welcome to Star Words V - The Console Strikes Back!");
        console.log("---------------------------------------------------");

        var i = Math.floor(Math.random() * wordList.length);
        //console.log("random word: " + wordList[i])
        var theWord = wordList[i];
        starWord = new word(theWord);

        newGame = false;
        starWord.stringTheWord()
    }
    var wordComplete = [];

    // Check to see if we have any matching letters.
    // The first time through wordComplete will return all false values.
    starWord.wordArray.forEach(completeCheck);

    // If there is at least one false value in wordComplete then keep going because it means that the user has not guessed the complete word
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
                        // Check if the guess is correct.
                        // if so then set $Letter.foundLetter to true
                        var wordCheckArray = [];
                        starWord.userGuess(iResponse.userinputut)

                        // Next, update the wordArray with either underscores (foundLetter = false) or the letter (foundLetter = true)
                        starWord.wordArray.forEach(wordCheck)

                        // If wordCheckArray and wordComplete are the same, it means that the letter was not found.
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
                        console.log("Incorrect letters: " + incorrectLetters.join(" "))  // use the join to add a space for readability
                        console.log("Correct letters: " + correctLetters.join(" ") + "\n")

                        if (totalStrikes > 0) {
                            runGame();
                        } else {
                            console.log("Sorry, you have struck out!  :-(")
                            restartGame();
                        }

                        function wordCheck(answerLetter) {
                            wordCheckArray.push(answerLetter.foundLetter);
                        }
                    }
                }
            })

    } else {
        console.log("!!! Congratulations, you win!!!\n")
        restartGame();
    }
    // Check to see if the user found any letters
    // foundLetter is a boolean
    // answerLetter is the letter from the forEach function above.
    function completeCheck(answerLetter) {
        wordComplete.push(answerLetter.foundLetter);
        // Put the boolean value of answerLetter.foundLetter  into the wordComplete array.
        // For example: 
        // h : false
        // a : false
        // n : true
        // s : false
        // o : false
        // l : false
        // o : false

        // wordComplete: false false true false false false false

        //console.log("the answerLetter is: " + answerLetter)
        //console.log("the letter is: " + answerLetter.foundLetter)
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
            console.log("\nMay the Force be with you!\n")
            return;
        }
    })
}


runGame();