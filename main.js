//GLOBAL VARIABLES//
var currentGame = new Game();

//QUERY SELECTORS//
var classicGameBox = document.querySelector('.classic-game');
var difficultGameBox = document.querySelector('.difficult-game');
var changeGameButton = document.querySelector('.change-game-button');
var fighterImageBox = document.querySelector('.fighter-images');
var chooseGameText = document.querySelector('.page-subtitle1');
var chooseFighterText = document.querySelector('.page-subtitle2');
var alienImage = document.querySelector('.alien-image');
var lizardImage = document.querySelector('.lizard-image');
var humanChosenFighter = document.querySelector('.human-chosen-image');
var computerChosenFighter = document.querySelector('.computer-chosen-image');
var chosenBothFighter = document.querySelector('.chosen-fighter');
var gameResultText = document.querySelector('.game-result-text');
var humanDisplayedScore = document.querySelector('.human-displayed-score');
var computerDisplayedScore = document.querySelector('.computer-displayed-score');
var domToken = document.querySelector('.token');
var tokenButton = document.querySelector('.token-button');

//EVENT LISTENERS//
classicGameBox.addEventListener('click', function() {
  startClassic()
  currentGame.changeGameType(classicGameBox.closest('#classic').id)
});

difficultGameBox.addEventListener('click', function() {
  startDifficult()
  currentGame.changeGameType(difficultGameBox.closest('#difficult').id)
});

fighterImageBox.addEventListener('click', function() {
  if (event.target.id === 'change-button') {
    changeGame()
    return
  }
  currentGame.updateUserChoice(event.target.id)
  displayFighters()
});

tokenButton.addEventListener('click', selectToken);

//FUNCTIONS//
function selectToken() {
  currentGame.human.tokens.unshift(currentGame.human.tokens.pop());
  domToken.innerHTML = currentGame.human.tokens[0];
}

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function startClassic() {
  hide(classicGameBox);
  hide(difficultGameBox);
  hide(chooseGameText);
  show(chooseFighterText);
  show(fighterImageBox);
}

function startDifficult() {
  hide(classicGameBox);
  hide(difficultGameBox);
  hide(chooseGameText);
  show(chooseFighterText);
  show(fighterImageBox);
  show(lizardImage);
  show(alienImage);
}

function checkChoiceIdMatchHumanChoice() {
  if (currentGame.human.choice === 'rock') {
    humanChosenFighter.src = "./assets/rock.png"
  } else if (currentGame.human.choice === 'paper') {
    humanChosenFighter.src = "./assets/paper.png"
  } else if (currentGame.human.choice === 'scissors') {
    humanChosenFighter.src = "./assets/scissors.png"
  } else if (currentGame.human.choice === 'alien') {
    humanChosenFighter.src = "./assets/alien.png"
  } else if (currentGame.human.choice === 'lizard') {
    humanChosenFighter.src = "./assets/lizard.png"
  }
}

function checkChoiceIdMatchComputerChoice() {
  if (currentGame.computer.choice === 'rock') {
    computerChosenFighter.src = "./assets/rock.png"
  } else if (currentGame.computer.choice === 'paper') {
    computerChosenFighter.src = "./assets/paper.png"
  } else if (currentGame.computer.choice === 'scissors') {
    computerChosenFighter.src = "./assets/scissors.png"
  } else if (currentGame.computer.choice === 'alien') {
    computerChosenFighter.src = "./assets/alien.png"
  } else if (currentGame.computer.choice === 'lizard') {
    computerChosenFighter.src = "./assets/lizard.png"
  }
}

function displayFighters() {
  hide(fighterImageBox)
  checkChoiceIdMatchHumanChoice()
  checkChoiceIdMatchComputerChoice()
  displayWinnerText()
  show(chosenBothFighter)
  hide(chooseFighterText);
  updateDisplayedScores()
  setTimeout(gameCycle, 3000)
}

function displayWinnerText() {
 if (currentGame.winner === 'human') {
   gameResultText.innerText = `🎉 HUMAN won!!! 🎉`
 } else if (currentGame.winner === 'computer') {
   gameResultText.innerText = `COMPUTER won!!! ☹️`
 } else {
   gameResultText.innerText = `It's a draw!!! 😑`
 }
}

function updateDisplayedScores() {
  humanDisplayedScore.innerText = `score: ${currentGame.human.score}`
  computerDisplayedScore.innerText = `score: ${currentGame.computer.score}`
}

function gameCycle() {
  gameResultText.innerText = null;
  show(fighterImageBox)
  hide(chosenBothFighter)
  show(chooseFighterText);
}

function changeGame() {
  show(classicGameBox);
  show(difficultGameBox);
  show(chooseGameText);
  hide(chooseFighterText);
  hide(fighterImageBox);
  hide(lizardImage);
  hide(alienImage);
}
