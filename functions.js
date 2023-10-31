// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greetAFriend(name) {
    return `Hi there, ${name}!`;
  }
  
  console.log(greetAFriend("buddy"));

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) { return `Hi there, ${name}!`; }
  
  console.log(customGreeting("Barry"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(name = "Jarvis Romeo Bailey") { return `Hi, ${name} it's nice to see you!`; }
  
  console.log(greetPerson());

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(x) { return x*x; }
  
  console.log(square(3));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.


var salsa = 1
var tortillas = 3
var coffee = 4
var cheese = 0

function checkStock(product){ if (product === 4) {
    console.log(`Coffee is stocked`);
  } else if (product < 4 && product > 2) {
    console.log(`Tortillas - running LOW`);
  } else if (product < 4 && product === 1) {
    console.log(`Salsa - running LOW`);
  } else if (product < 1) { console.log(`Cheese - out of stock!`); }}


checkStock(4, "Coffee");
// => "Coffee is stocked"


checkStock(3, "Tortillas");
// => "Tortillas - running LOW"


checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"