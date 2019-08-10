function Letter(actualLetter) {
    this.theLetter = actualLetter;
    this.foundLetter = false;

    this.toString = function () {
        if (this.theLetter === " ") {
            this.foundLetter = true;
            return " ";
        } else {
            if (this.foundLetter === false) {
                return "_";
            } else {
                return this.theLetter;
            }
        }
    };
    this.checkLetter = function (thePassedLetter) {
        if (thePassedLetter === this.theLetter) {
            this.foundLetter = true;
        } 
    }
}

/*
var letterToGuess = "a";
var theRealLetter = "b";

// create a new instance of Letter passing it the letter we need to find
var x = new Letter(theRealLetter)

x.checkLetter(letterToGuess)

if (x.foundLetter) {
    console.log(letterToGuess + " matches: " + theRealLetter)
    var s = x.toString()
    console.log(s)
} else {
    console.log(letterToGuess + " does not match: " + theRealLetter)
    var s = x.toString()
    console.log(s)
}
*/

module.exports = Letter;
