// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, 
// useful for formatting or comparing strings.
function convertCase(str) {
    var upperstr = str.toUpperCase();
    var lowerstr = str.toLocaleLowerCase();
    console.log("UpperCase:", upperstr, "LowerCase:", lowerstr);
}
convertCase("Hello World");
convertCase("I love TypeScipt");
