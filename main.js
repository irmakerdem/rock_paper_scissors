var currentGame = new Game();
//never reassign currentGame and its data to anything (it's okay to use them though!)

//on page load, create 2 players
// window.addEventListener('load', ???????);


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

classicGameBox.addEventListener('click', function() {
  startClassic()
  console.log(classicGameBox.closest('#classic').id);
  currentGame.changeGameType(classicGameBox.closest('#classic').id)
});

difficultGameBox.addEventListener('click', function() {
  startDifficult()
  currentGame.changeGameType(difficultGameBox.closest('#difficult').id)
});

fighterImageBox.addEventListener('click', function() {
  currentGame.updateUserChoice(event.target.id)
  displayFighters()
});

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

function checkChoiceIdMatchHuman() {
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


//check currrnet choice's source and change it to match image of choice
//pick fighter
//chnage source of fighter in order to

function checkChoiceIdMatchComputer() {
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
  checkChoiceIdMatchHuman()
  checkChoiceIdMatchComputer()
  displayWinnerText()
  show(chosenBothFighter)
  hide(chooseFighterText);
  updateDisplayedScores()
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

function changeGame() {

}


//setTimeout(function, 3000);

//home page button?

//reset game to 0-0 --> requires local storage

//maintain wins on sidebars

//add tokens array
