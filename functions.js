// Basic syntax of a function

function sayHello () {
    return "Hello World!";
}

console.log(sayHello())


// Function with a parameter
function sayName(name) {
    return `Hello ${name}!`;
}
console.log(sayName("Jesus"))

// Function with a parameter, but no argument is passed
function sayNameTest(name) {
    return `Hello ${name}!`;
}
console.log(sayNameTest())

//Hoisting - functions are able to be called despite their location 
console.log(sayHelloWorld("Sarah Hoister"))


//Function with a default parameter.
function sayHelloWorld(name = "World") {
    return `Hello ${name}!`
}
console.log(sayHelloWorld())

//Anonymous function
var add = function (num1,num2) {
    return num1 + num2;
};
console.log(add(2, 2))

//Arrow function
var multiply = (num1, num2) => {
   return num1 * num2
}
console.log(multiply(3, 3))

//Simplified Arrow function
var multiply_arrow = (num1, num2) => num1 * num2
console.log(multiply_arrow)


// Exercise 1. Declare a named function that takes an array of numbers, and returns the sum of the array.
var array = [1, 3, 5, 8, 1]

function sum (array) {
    let total = 0
    for (var element of array) {
        total += element
    } 
    return total
}
console.log(sum(array))
// 2. Define an anonymous function expression that takes two arguments:
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a key 
//that matches the string. Store this function in an appropriately named variable to invoke it.

var movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    language: "Spanish"
};


var findKey = function(object, string) {
    for (var key in object){
        if (key === string) {
            return true
        }
    }return false
}

console.log(findKey(movie, "year")) //true
console.log(findKey(movie, "language")) //true
console.log(findKey(movie, "Clint Eastwood")) //false
console.log(findKey(movie, 13)) //false

//alternative method to 2.

function keyInObject(obj, key) {
    return key in obj;
}
