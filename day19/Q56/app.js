// *Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// *Explain & TIP:* We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
var mixedArry = [1, "Mango", 5, "Banana", true, "onion"];
var StringsArray = mixedArry.filter(function (item) { return typeof item === "string"; });
console.log(StringsArray);
