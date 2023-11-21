let userGuessButton = document.getElementById("get-guess-button");

let targetNumberUserIsGuessingFor = getRandomNumber();
console.log(targetNumberUserIsGuessingFor);

let playAgainButton = document.getElementById("reset-button");

let currentScore = 0;
let highscore = 0;

userGuessButton.addEventListener("click", function () {
  let userGuess = getUserGuess();
  console.log(userGuess);

  if (userGuess == targetNumberUserIsGuessingFor) {
    document.getElementById("hiddenNumber").innerHTML =
      targetNumberUserIsGuessingFor;
    document.getElementById("number-box").style.backgroundColor = "lightgreen";
    userGuessButton.disabled = true;
    scoreUpdate();
    updateHighScore();
    // resetCurrentScore();
  } else if (userGuess > 20 || userGuess < 1) {
    document.getElementById("hiddenNumber").innerHTML = "Read the rules";

    document.getElementById("number-box").style.backgroundColor = "red";

    //display guess higher
  } else if (userGuess > targetNumberUserIsGuessingFor) {
    document.getElementById("number-box").style.backgroundColor = "white";
    document.getElementById("number-box").style.backgroundColor = "red";
    document.getElementById("hiddenNumber").innerHTML = "Too High!";
    scoreUpdate();
  } else {
    document.getElementById("hiddenNumber").innerHTML = "Too Low!";
    document.getElementById("number-box").style.backgroundColor = "white";
    document.getElementById("number-box").style.backgroundColor = "blue";
    scoreUpdate();
  }
});

playAgainButton.addEventListener("click", function () {
  targetNumberUserIsGuessingFor = getRandomNumber();
  resetCurrentScore();
  console.log(targetNumberUserIsGuessingFor);
  document.getElementById("hiddenNumber").innerHTML = "?";
  document.getElementById("number-box").style.backgroundColor = "tomato";
  userGuessButton.disabled = false;
});

function scoreUpdate() {
  currentScore++;
  document.getElementById("user-score").innerHTML = currentScore;
}

function updateHighScore() {
  if (highscore == 0) {
    highscore = currentScore;
    document.getElementById("highscore").innerHTML = highscore;
    currentScore = 0;
  } else if (currentScore <= highscore) {
    highscore = currentScore;
    document.getElementById("highscore").innerHTML = highscore;
    currentScore = 0;
  }
}

function resetCurrentScore() {
  currentScore = 0;
  document.getElementById("user-score").innerHTML = currentScore;
  // I could have just put this in the win condition but whatever
}

function getRandomNumber() {
  let randomGeneratedNumber = Math.floor(Math.random() * 20) + 1;

  //randomGeneratedNumber = 5;
  return randomGeneratedNumber;
}

function getUserGuess() {
  let guess = document.getElementById("userGuess").value;

  return guess;
}
