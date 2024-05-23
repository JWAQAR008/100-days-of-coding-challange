
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. 
// It looks at the decimal part and decides whether to round up or down.

// This function rounds a decimal number to the nearest whole number
function RoundtoNerestNumber(num:number):number{
    return Math.round(num) // Rounds the number
}
// Example: Rounding a decimal
console.log(RoundtoNerestNumber(4.8));//Output 5
console.log(RoundtoNerestNumber(5.6));//Output 6
console.log(RoundtoNerestNumber(6.5));//Output 7
console.log(RoundtoNerestNumber(7.4));//Output 7


