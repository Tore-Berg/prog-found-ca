/*Question 1. 

Declare and initialize a variable with a string value.*/

var myName = "Tore Berg";

/*Question 2. 

Create an object variable called person and give it two properties (a key and a value) of your choice.*/

var person = {
    name: "Tore Berg",
    age: 38
};

/*Question 3.

Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock".*/

var outOfStock = true; 

if(outOfStock === true) {
    console.log("Out of stock"); //Out of stock.
}

else {
    console.log("In stock.");
}

/*Question 4. 

Create an array of five numbers. Loop through the array and console log each value.*/

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); /*     1
                                    2
                                    3
                                    4
                                    5
                                    */
}

/*Question 5. 

Create a for loop that counts from 15 to 25. 
Console log the value of the counter variable inside the loop.*/

for(var i = 15; i <= 25; i++) {
    console.log(i);
}

/*Question 6. 

Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.*/

for(var i = 15; i <= 25; i++) {

    if (i === 20) {
    console.log(i); //20
    }
}

/*Question 7

Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.*/

var myGirls = [
    {
        name: "Malin",
        age: 13,
        brunette: false,
    
    },
    
        {
        name: "Hilde",
        age: 42,
        brunette: true
    }
];

console.log(myGirls);

/*Question 8. 

Create a function called whatIDontLike that accepts one argument. 
Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.

Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes".*/

function whatIDontLike(lockDown) {
    console.log("I don't like " + lockDown); //I don't like closed borders.
}

whatIDontLike("closed borders");  

/*Question 9. 

Create a function that accepts two arguments. Inside the function, subtract the second argument from the 
first and console log the result.*/

function myCalculator(number1, number2) {
    var sum = number1 - number2;
    console.log(sum); //-9
}

myCalculator(1, 10);

/*Question 10.

Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.*/

var myArray = [];
function myArgument(greetings) {
  myArray.push("How");
  console.log(myArray + " are " + greetings);
}
myArgument("you?");