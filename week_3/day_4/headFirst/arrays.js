// // var myFirstArray = [1,2,34,87,"dog"];

// // console.log(myFirstArray[4]);

// var products = ["Choo CHoo Choco", "Icy Mint", "cake batter", "bubblegum"];
// var last = products.length - 1;
// var recent = products[last];

// console.log(recent);

function makePhrases() {
  var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase);
}

makePhrases();