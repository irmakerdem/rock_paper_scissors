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

classicGameBox.addEventListener('click', function() {
  startClassic()
  // console.log(classicGameBox.closest('#classic').id);
  currentGame.changeGameType(classicGameBox.closest('#classic').id)
});

difficultGameBox.addEventListener('click', function() {
  startDifficult()
  currentGame.changeGameType(difficultGameBox.closest('#classic').id)
});


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

// event.preventDefault();




//CLASSIC PSEUDOCODE
////////click classicGameBox
////////hide 'Choose 1 of 2 Games Below'
////////show 'Choose Your Fighter!'
////////hide difficultGameBox
////////show 3 fighters
//add cursor hover over all 3 images
//click fighter
//show fighter and show computer random fighter
//show round result "Human won!", "Computer won!", "It's a draw!"
//hold for 4 sec
//update score
//show changeGameButton


//DIFFICULT PSEUDOCODE
//click difficultGameBox
//hide 'Choose 1 of 2 Games Below'
//show 'Choose Your Fighter!'
//hide classicGameBox
//show 5 fighters
//add cursor hover over all 5 images
//click fighter
//show fighter and show computer random fighter
//show round result "Human won!", "Computer won!", "It's a draw!"
//hold for 4 sec
//update score
//show changeGameButton




//if 'draw', don't add to score

// setTimeout(function () {}, 600);

//reset game to 0-0 --> requires local storage

//maintain wins on sidebars

//add tokens array
