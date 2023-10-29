// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { console.log("Hello, what is your name?") }

askForName()
// changed nothing


// EX 2:
function add(first, second, third) {
var sum = first + second + third
console.log(sum);
      }

add(1, 2, 3);
add(4, 2, 7);
// included console.log(sum) instead of return to see the sum and simplified addThreeNumbers to add


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

// Fixed typo func to funtion


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg;
  }
  console.log(average(10, 2));
  
  // added semicolon after return average and console logged 2 numbers