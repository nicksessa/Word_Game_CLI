var Letter = require("./letter.js")
// When you call Word and pass it a word, it breaks the word up into characters.
// Each character is used to create an object using the Letter constructor.
// Then each object is put into the wordArray.

function Word(aWord) {
    this.wordArray = [];

    //var output = aWord.split('')  <-- we don't need this

    //console.log("You passed: " + aWord)
    for (var i = 0; i < aWord.length; i++) {
        //console.log(output[i])
        var x = new Letter(aWord[i])  // This makes a new object using the Letter constructor. Name of each object is each letter of the word.
        this.wordArray.push(x)        // Put the object into an array (wordArray).
        //console.log("x is: " + x)
    }
    // if the word is "han solo", then wordArray will be: _ _ _  _ _ _ _
    // or more correctly: "___ ____"
    //console.log("-----------------------")
    //for (var i = 0; i < this.wordArray.length; i++) {
       // console.log("word Array[" + i + "] --> " + this.wordArray[i].theLetter)
    //}

    // Create a string (s) using every object in the wordArray (which is really an array of characters).
    // If the word was "han solo" then the array would be "___ ____"
    // Notice the lack of spaces between the letters.
    // To fix this, we add spaces using the next function:
    this.stringTheWord = function() {
        var s = "";
        for (var i = 0; i < this.wordArray.length; i++) {
            s += this.wordArray[i] + " ";
            
        }
        console.log("[[  " + s + " ]]\n")
    }

    this.userGuess = function(aLetter) {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].checkLetter(aLetter)
        }
    }
}

//Word("Deathstar");
//var xx = new Word("Luke Skywalker")

//console.log(xx.s + "\n");
//xx.stringTheWord();

//xx.userGuess("a");
//xx.stringTheWord();

//console.log("-->" + xx.s + "\n");

//var s = xx.stringTheWord
//console.log("this is a string of 'Deathstar': " + s)


module.exports = Word;
