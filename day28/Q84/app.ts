
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else.
//  By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

// This function swaps "JavaScript" with "TypeScript" in a sentence
function ReplacejavascriptWithTypescript(sentence:string):string{
return sentence.replace(/JavaScript/g,"TypeScript");
}
// Example: Changing a programming language name in a sentence
console.log(ReplacejavascriptWithTypescript("I Love JavaScript and JavaScript is Awesome!"));
