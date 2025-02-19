const testScores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

const testScoreUlRef = document.getElementById("testScoreList");

for (let i = 0; i < testScores.length; i++) {
  testScoreUlRef.innerHTML += "<li>" + testScores[i] + "</li>";
}

const avgPref = document.getElementById("avgScore");
let sumOfScores = 0;
for (let i = 0; i < testScores.length; i++) {
  const score = testScores[i];
  sumOfScores += score;
}

avgPref.innerHTML += "<h4>Average:" + sumOfScores / testScores.length + "</h4>";
