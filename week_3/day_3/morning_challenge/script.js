var counter = 1;
var userInput;
var text = "";


userInput = prompt("How high should we go?")
while (counter <= userInput) {
  // console.log("Loop #" + counter)
  text += "<br>The number is " + counter;
  counter += 1;
}

console.log(text)
document.getElementById("demo").innerHTML = text