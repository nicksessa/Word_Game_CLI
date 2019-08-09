

function Letter(guessedLetter, actualLetter) {
    this.theGuess = guessedLetter;
    this.theLetter = actualLetter;

    var foundLetter = false;

    this.returnLetterOrUnderscore = function () {
        if (this.foundLetter) {
            return stringOf(this.theLetter);
        } else {
            return "_";
        }
    }
    this.checkLetter = function (thePassedLetter) {
        if (thePassedLetter == actualLetter) {
            this.foundLetter = true;
        } else {
            this.foundLetter = false;
        }
    }

}

var letterToGuess = "a";
var theRealLetter = "b";

var x = new Letter(letterToGuess, theRealLetter)

x.checkLetter(letterToGuess)

if (x.foundLetter) {
    console.log(letterToGuess + " matches: " + theRealLetter)
    var s = x.returnLetterOrUnderscore
    console.log(s)
} else {
    console.log(letterToGuess + " does not match: " + theRealLetter)
    var s = x.returnLetterOrUnderscore
    console.log(s)
}


module.exports = Letter;
