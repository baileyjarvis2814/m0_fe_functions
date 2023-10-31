// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
console.log("Hello World".toLowerCase()); 


console.log("Hello World".includes("Hello"));
// The includes() method is called on the string "Hello World"
// One arguement is passed; includes() wants the given data "Hello" to be included the String
// The return value is true


console.log("Hello World".endsWith("Hello"));
// The endsWith() method is called on the string "Hello World"
// One argument is passed; endsWith() wants the string to end with "Hello"
// The return value is false


console.log("Hello World".endsWith("rld"));
// The endsWith() method is called on the string "Hello World"
// One argument is passed; endsWith() wants the string to end with "rld"
// The return value is true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.
var firstName = "Barry"
var eyeColor = "Brown"

console.log(firstName .endsWith("n"));
// The ensWith() method is called on the variable firstName
// One argument is passed; endsWith() wants the variable to end with "n"
// The return value is false


console.log(eyeColor .includes("ow"));
// The includes() method is called on the variable eyeColor
// One argument is passed; includes() wants the variable to include "ow"
// The return value is true

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var a,b,c;
var arr = [1,2,3];
[a,b,c] = arr;
console.log(arr.includes(1));
// The includes() method is called on the arr variable, which stores the array [1,2,3]
// The includes method returns true if the array includes the number 1
console.log(arr.includes(4));
// The includes() method is called on the arr variable, which stores the array [1,2,3]
// The includes method returns false because the array does not included the number 4
