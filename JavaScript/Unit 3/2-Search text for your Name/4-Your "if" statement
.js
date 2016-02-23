/*jshint multistr:true */

var text = 'Arthur Arthur'

var myName = 'Arthur'

var hits = []

for (var i = 0; i < text.length; i++) {
    if (i === "A") {
        console.log("text " + text[i]);
    } else {
        console.log(" ");
    }
}
