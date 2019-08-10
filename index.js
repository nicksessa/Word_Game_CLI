var word = require("./word");
var inquirer = require("inquirer");
var totalStrikes = 5;
var correctLetters = [];
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

//getRandomWord();

var newGame = true;

runGame = function () {
    if (newGame) {
        console.log("---------------------------------------------------");
        console.log("Welcome to Star Words V - The Console Strikes Back!");
        console.log("---------------------------------------------------");

        // get the random word
        var theWord = getRandomWord()
        //use the random word to create a new instance
        starWord = new word(theWord)
        newGame = false;
        starWord.stringTheWord()
    }
    var wordComplete = [];
    starWord.wordArray.forEach(completeCheck);

    if (wordComplete.includes(false)) {
        // Prompt the user to start guessing
        inquirer.prompt([
            {
                type: "input",
                message: "Type a letter [a-z] to guess the word: ",
                name: "userInput"
            }
        ])
            .then(function (iResponse) {
                //console.log("User selected: " + iResponse.userInput)
                if (iResponse.userInput.length > 1) {
                    console.log("Only one letter is allowed at a time!  Please try again.")
                    runGame();
                }
                if (!validLetters.includes(iResponse.userInput)) {
                    console.log("Please only select letters from [a-z]")
                    runGame();
                }
                if (incorrectLetters.includes(iResponse.userInput)) {
                    console.log("Sorry, that letter has already been tried.")
                    runGame();
                }
                if (correctLetters.includes(iResponse.userInput)) {
                    console.log("You already found that letter!")
                    runGame();
                }
                // starWord is an instance of Word.
                // use the userGuess function in the starWord constructor and pass the character (iResponse.name)
                //starWord.userGuess(iResponse.name)
                //starWord.wordArray.forEach(wordCheck)

                // Check if the guess is correct
                var wordCheckArray = [];
                starWord.userGuess(iResponse.userInput)

                starWord.wordArray.forEach(wordCheck)

                if (wordCheckArray.join('') === wordComplete.join('')) {
                    console.log("\nIncorrect\n");

                    incorrectLetters.push(iResponse.userInput);
                    totalStrikes--;
                } else {
                    console.log("\nCorrect!\n");
                    correctLetters.push(iResponse.userInput);
                }

                starWord.stringTheWord()

                console.log("Strikes remaining: " + totalStrikes);
                console.log("Letters Guessed: " + incorrectLetters.join(" "))

                if (totalStrikes > 0) {
                    runGame();
                } else {
                    console.log("Sorry, you have struck out!")
                    restartGame();
                }

                function wordCheck(key) {
                    wordCheckArray.push(key.foundLetter);
                    //for (var i = 0; i < wordCheckArray.length; i++) {
                        //console.log("wordCheckArray: " + wordCheckArray[i])
                        //console.log("--------")
                    //}
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