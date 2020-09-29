// function calculateAge(birthYear) {
//   var age = new Date().getFullYear() - birthYear;   // fuction definition
//   console.log(age);
// }


// calculateAge(1989); // funtion call 

// function square(num1) {
//   console.log(num1 * num1);     // function definition
// }

// square(9); // function call

function evensOnly() {
  // logic in code block
  var limit = prompt("Enter a number to count up to");
  var counter = 0;
  while(counter <= limit) {
    if (counter % 2 == 0) { // this is checking if we divide by two is the number evenly divded
      console.log(counter)
    }
    counter++; 
  }
}

evensOnly();


// Create a function that takes in input. 
//The function should count by threes until it is greater than the number.

// crt + a
// ctrl + /

function countByThrees() {
  var limit = prompt("enter a number to count up to by three");
  var counter = 0;

  while(counter <= limit) {
    console.log(counter)
    counter += 3;
  }
}

countByThrees();