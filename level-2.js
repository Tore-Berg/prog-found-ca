/*

Level 2

Question 1

Using the loop from question 5 above, only log the counter variable if it is an even number.*/

for(var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}

/*

Question 2

Create a function that logs the sentence "I am a function".

Assign this function to a variable called innerFunction.

Create another function called outerFunction that accepts one argument.

Inside outerFunction, call the argument like you would a function - with parenthesis ().

Call outerFunction and pass in the innerFunction variable.

*/

function myFunction() {
    console.log("I am a function");
  }
  var innerFunction = myFunction("I am a function");
  function outerFunction(oneArgument) {
    oneArgument();
  }
  outerFunction(innerFunction);