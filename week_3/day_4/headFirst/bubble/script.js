var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scoresArrayParam) {
  var highScore = 0;
  var output;

  for (var index = 0; index < scoresArrayParam.length; index++) {
    output = "Bubble solution #" + index + " score: " + scoresArrayParam[index];
    console.log(output);
    if (scoresArrayParam[index] > highScore) {
      highScore = scoresArrayParam[index];
    }
  }
  return highScore;
}

function getBestResults(scoresArrayParam, highScore) {
  var bestSolutions = [];
  for (var i = 0; i < scoresArrayParam.length; i++) {  // this iterates through our scoresArray element
    if (scoresArrayParam[i] == highScore ) {           // in search of indexes with the highScore
      bestSolutions.push(i);
    }
  } 
  return bestSolutions;
}

var highScore = printAndGetHighScore(scores); // calling the function to get high score

console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore); // calling the 
console.log("Solutions with the highest score: " + bestSolutions);


// REFACTORED
