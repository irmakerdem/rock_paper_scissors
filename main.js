var currentGame = new Game();
//never reassign currentGame and its data to anything (it's okay to use them though!)

//on page load, create 2 players

var classicGameBox = document.querySelector('.classic-game');
var difficultGameBox = document.querySelector('.difficult-game');
var changeGameButton = document.querySelector('.change-game-button');

classicGameBox.addEventListener('click', currentGame.changeGameType);
difficultGameBox.addEventListener('click', currentGame.changeGameType);


// anonynymous function () --> currentGame.determineGameType(event.target.id);
// determineUser1Choice
// determineUser1Choice
// determineWinner

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

  // event.preventDefault();

// setTimeout(function () {}, 600);

//reset game to 0-0
