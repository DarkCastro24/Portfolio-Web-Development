// Define a higher-order function that generates power functions
function generateGreetingFunction(timeOfDay) {
    // The returned function calculates the nth power of a given number
    return function (name) {
        return timeOfDay + ", " + name +"!";
    };
  }
  
  // Generate power functions for different exponents
  const greeting = generateGreetingFunction("Morning");
  
  // Use the generated functions
  console.log("Good", greeting("Diego")); 