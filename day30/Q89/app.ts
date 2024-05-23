
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, 
// allowing you to perform mathematical operations on them.

// This function changes a string into a number
function converStringToNumber(str:string):number{
    return parseInt(str); //convert the string to a number

}
console.log(converStringToNumber("125.45"));
console.log(converStringToNumber("89"));
// We're taking strings that look like numbers and turning them into actual numbers.