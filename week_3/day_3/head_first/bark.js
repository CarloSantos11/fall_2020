// bark("rover", 23); 
// bark("spot", 13); 
// bark("spike", 53); 
// bark("lady", 17);

// function bark(name, weight) {
//   if (weight > 20) {
//     // code block
//     // only runs when if condition is true
//     console.log(name + " says WOOF WOOF");
//   } else {
//     // defaults to this statement if the 'if' condition does not pass
//     console.log(name + " says woof woof");
//   }
// }

function doIt(param) {
  param = 2;
  return param;
}

var test = 1;
test = doIt(test);
console.log(test);