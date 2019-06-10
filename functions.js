//named functions

// console.log(sayHello("sarab")); //we can run the function before declaring it
//
// function sayHello(name = "world"){
//   return "Hello " + name
// }

 // console.log(sayHello());


//anonymous functions

// var add = function(firstNumber, secondNumber){
//   return firstNumber + secondNumber;
// }
// console.log(add(1, 3));

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
//  var numbers = [1, 2, 3, 4, 5]
// function arrayNumbers(array){
// return array.reduce(add);
// }
//
// function total(array){
//   var total = 0;
//   for(var number of array)
//   total += number;
// }
// return total;
// }
//
// console.log(arrayNumbers(numbers));

// Define an anonymous function expression that takes two arguments:
//
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

// var objectHasKey = function(object, searchString){
//   for(var key in object){
//     if(key === searchString){
//       return true;
//     }
//   }
//   return false;
// }
//
// var person = {
//   name: "Ian",
//   age: 30
// }
// console.log(objectHasKey(person, 'name')); //for false value write anything else instead of 'name' like 'email'
//
//
var multiply = (firstNumber, secondNumber) => 
   firstNumber * secondNumber;

console.log(multiply(3, 3));
