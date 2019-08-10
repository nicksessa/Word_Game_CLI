var Letter = require("./letter.js")

function Word(aWord) {
    this.wordArray = [];

    //var output = aWord.split('')

    //console.log("You passed: " + aWord)
    for (var i = 0; i < aWord.length; i++) {
        //console.log(output[i])
        var x = new Letter(aWord[i])
        this.wordArray.push(x)
    }
    //console.log("-----------------------")

    this.stringTheWord = function() {
        s = "";
        for (var i = 0; i < this.wordArray.length; i++) {
            s += this.wordArray[i] + " ";
            
        }
        console.log("[  " + s + " ]\n")
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
