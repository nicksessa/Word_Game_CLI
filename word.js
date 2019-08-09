var Letter = require("./letter")

function Word(aWord) {
    var output = aWord.split('')
    console.log("You passed: " + aWord)
    for (var i = 0; i < output.length; i++) {
        console.log(output[i])
    }
    console.log("-----------------------")
}

Word("Deathstar");
