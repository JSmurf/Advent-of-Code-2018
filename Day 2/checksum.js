// Very inefficient way to do this...
var fs = require('fs');

var twoCount = 0;
var threeCount = 0;
var alpha = "abcdefghijklmnopqrstuvwxyz";
// Yes, I learned a much better way to process the data...
fs.readFile('input.txt', 'utf8', (err, data) => {
    // Just split up a big 'ol string into an array by line
    var input = data.split('\n');
    // Itterate through the array
    for (var j = 0; j < input.length; j++) {
        // Give each item in the array a meaningul name
        var line = input[j];
        // Keep track of whether we've seen a two or a three for this line
        var hasTwo = 0;
        var hasThree = 0;
        // Itterate through the alphabet
        for (var i = 0; i < alpha.length; i++) {
            // Create a new regular expression for each letter
           var regex = RegExp(alpha[i], "g");
           // Find all the matches for that letter
            var match = line.match(regex);
            // Check to make sure there is a match
            if (match != null) {
                // Check to see if there are exactly two matches
                if (match.length === 2) {
                    // Tell our holder variable that it is
                    hasTwo++;
                }
                // Check to see if there are exactly three matches
                if (match.length === 3) {
                    // Likewise, tell our holder variable
                    hasThree++;
                }
            }
        }
        // Add to our total count if there have been any twos or threes
        if (hasTwo > 0) {
            twoCount++;
        }
        if (hasThree > 0) {
            threeCount++;
        }
    }
    // Multiply the number of twos and threes
    console.log(twoCount * threeCount);

});