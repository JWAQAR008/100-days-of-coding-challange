
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the 
// same task, such as squaring a number.

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined,
//  and expressions that are stored in variables and are called using the variable name.

function squaredeclaration(number:number): number{
    return number * number
}
const squareExpressions = function(number:number) :number {
   return  number * number
}
console.log(squaredeclaration(4));
console.log(squareExpressions(5));
