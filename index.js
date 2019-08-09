var word = require("./word");
var inquirer = reqire("inquirer");

var wordList = ["DEATHSTAR", "TATOOINE", "XWING", "YODA",
"LUKE", "DARTH", "TIEFIGHTER", "YAVIN", "LIGHTSABER",
"HANSOLO", "GREEDO", "SKYWALKER", "DAGOBAH", "CHEWBACCA",
"TUSKIN"]

getRandomWord = function() {
   var i = Math.floor(Math.random() * wordList.length) + 1;
   console.log("random word: " + wordList[i])
   return wordList[i]
}

// get the random word
var theWord = getRandomWord()

//use the random word to create a new instance
var xx = new Word(theWord)

// Prompt the user to start guessing
inquirer.prompt([
    {
        type: "input",
        message: "Type a letter to guess the word: ",
        name: "letter"
    }
])
.then(function(iResponse) {
    console.log("User selected: " + iResponse.letter)
})