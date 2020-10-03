// var box = document.getElementById("box");

// box.addEventListener('mouseover', changeColor);

// function changeColor() {
//   box.style.backgroundColor = "red"
// }

// - Create a function that takes an array as a parameter. It will use a loop to go through the given array and print all the elements.

// - Create a function that takes an array as a parameter. Loop through the array and find the largest value inside of that array.

// - Create a function that uses an even listener onhover to change a blue square to a red square.

// var imagine = [1,2,3,4,5,6,7];
// var a2 = [111,33,45,5];
// var a3 = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7];

// Data Types
// strings ""
// number 1,2,3
// booleans T,F

// Array [1,2,3,4,5], [ "words", "stuff"], [["character info"],[1,2,3]];
// Objects

// function printArray(arrayPlaceholder) {
//   for(var x = 0; x < arrayPlaceholder.length; x++){  // function definiton 
//     console.log(arrayPlaceholder[x]);
//   }
// }

// printArray(a3); // fucntion call 


// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(1,2);

// function printHelloWorld(){
//   console.log("hello world");
// }

// printHelloWorld();

// - Create a function that takes an array as a parameter. Loop through the array and find the largest value inside of that array.

// Create a function that uses an even listener onhover to change a blue square to a red square.

var box = document.getElementById("box");
box.addEventListener("mouseover", changeColor);

function changeColor() {
  box.style.backgroundColor = "red";
}