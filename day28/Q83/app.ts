// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, 
// useful for formatting or comparing strings.

// This function changes a string to uppercase and then to lowercase
function convertCase(str:string){
    let upperstr = str.toUpperCase();
    let lowerstr = str.toLocaleLowerCase();
    console.log("UpperCase:", upperstr,"LowerCase:",lowerstr);
    
}
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
// We're showing the same text in all uppercase and then all lowercase.
convertCase("I love TypeScipt")