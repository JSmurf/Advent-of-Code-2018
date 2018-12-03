// On the theme of super-ineffecient solutions...
var fs = require('fs');
// Create placeholders for our boxes
var boxOne = "";
var boxTwo = "";
var commonLetters = "";
// Open up our input file
fs.readFile('input.txt', 'utf8', (err, data) => {
    var input = data.split('\n');
    // Itterate through the input array
    for (var i = 0; i < (input.length - 1); i++) {
        // Give our first input line an easier name to reference
        var stringOne = input[i];
        // Itterate through the rest of the array
        for (var j = i + 1; j < input.length; j++) {
            // Give our second input an easier name to reference
            var stringTwo = input[j];
            // Create an array to hold the number of different characters
            var differences = 0;
            // Itterate over the letters in the string
            for (var k = 0; k < stringOne.length; k++) {
                // If the characters are different, count up
                if (stringOne[k] != stringTwo[k]) {
                    differences++;
                }
            }
            // Once we get through both strings, check to see if there's exactly one difference
            if (differences === 1) {
                // If there is, those are our two strings! 
                boxOne = stringOne;
                boxTwo = stringTwo;
            }
        }
    }
// Itterate over the strings again
for (var i = 0; i < boxOne.length; i++) {
    // Put all the common letters into the commonLetters string
    if (boxOne[i] === boxTwo[i]) {
        commonLetters += boxOne[i];
    }
}
// Log those characters to the console! 
console.log(commonLetters)
})