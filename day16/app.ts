
// *Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.

// *Explain & TIP:* Objects can also contain functions (methods) that can perform actions using the object's properties. 
// This introduces method definition within objects.

let laptop = {
    make : "Hp",
    model : "probook 640",
    year : 2020,
    describe: function() {
        console.log(`This laptop is a ${this.make}${this.model}${this.year}`);
        
    }
};
laptop.describe();


// *Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year,
//  use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// *Explain & TIP:* Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures

let Laptops = [
    {make : "Hp",model : "probook 640",year : "2020"},
    {make : "Apple", model: "Macbook pro", year : 2020},
    {make : "Hp", model : "Pavilion 15" , year : 2019}];
    
let [Laptop1, Laptop2 ,laptops3] =  Laptops;
console.log(Laptop1);
console.log(Laptop2);

// *Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// *Explain & TIP:* The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
let priceSet1 = [20000,25000,30000];
let priceSet2 = [15000,10000,18000];
let combinePrices = [...priceSet1,...priceSet2].sort((a,b)=>a-b);
console.log(combinePrices);
