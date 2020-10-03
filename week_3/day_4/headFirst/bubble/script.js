var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// prices correlate to scores index number
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .30, .25, .24, .25, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29]


// takes in a parameter of 
function printAndGetHighScore(scoresArrayParam) {
  var highScore = 0;
  var output;

  for (var index = 0; index < scoresArrayParam.length; index++) {
    output = "Bubble solution #" + index + " score: " + scoresArrayParam[index];
    console.log(output);
    // this is where we check for high score
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

function getMostEffectiveSolution(scores, costs, highScore) {
  var cost = 100.00;
  var index;

  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      console.log("we made it here: " + cost + " > " + costs[i]);
      if (cost > costs[i]) {
        // console.log("we made it here:" + costs[i]);
        index = i;
        cost = cost[i];
      }
    }
  }
  return index;
}

var highScore = printAndGetHighScore(scores); // calling the function to get high score

console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore); // calling the 
console.log("Solutions with the highest score: " + bestSolutions);

var mostCostEffective = getMostEffectiveSolution(scores, costs, highScore);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective!");


// REFACTORED
