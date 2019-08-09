var Letter = require("./letter")

function Word(aWord) {
    this.wordArray=[]
    this.someString

    var output = aWord.split('')

    console.log("You passed: " + aWord)
    for (var i = 0; i < output.length; i++) {
        //console.log(output[i])
        var x = new Letter(output[i])
        this.wordArray.push(x)
    }
    console.log("-----------------------")

    this.stringTheWord = function() {
        for (var i = 0; i < wordArray.length; i++) {
            someString += wordArray[i].toString()
            
        }
    }

}

//Word("Deathstar");
var xx = new Word("Deathstar")

var s = xx.stringTheWord
console.log("this is a string of 'Deathstar': " + s)




