var Letter = require("./letter")

function Word(aWord) {
    this.wordArray=[];
    this.someString = "";

    var output = aWord.split('')

    console.log("You passed: " + aWord)
    for (var i = 0; i < output.length; i++) {
        //console.log(output[i])
        var x = new Letter(output[i])
        this.wordArray.push(x)
    }
    console.log("-----------------------")

    this.stringTheWord = function() {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.someString += this.wordArray[i] + "";
            
        }
        console.log("somestring: " + this.someString + "\n")
    }
}

//Word("Deathstar");
var xx = new Word("Deathstar")

console.log(xx.someString);
xx.stringTheWord();


//var s = xx.stringTheWord
//console.log("this is a string of 'Deathstar': " + s)




