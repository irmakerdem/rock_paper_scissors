class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token = null;
    this.score = 0;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.choice = this.takeTurnClassic();
    this.choiceDif = this.takeTurnDifficult();
    this.difficultFighters = ["rock", "paper", "scissors", "alien", "lizard"];
  }
  takeTurnClassic(choiceId) {
    return choiceId || this.getRandomElement(this.classicFighters);
  }
  takeTurnDifficult(choiceId) {
    return choiceId || this.getRandomElement(this.difficultFighters);
  }
  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  }
  winRound() {
    this.score++;
  }
};



// if (playerName === 'human') {
//   if (choiceId === 'rockId') {
//     this.choice = 'rock'
//   } else if (choiceId === 'paperId') {
//     this.choice = 'paper'
//   } else if (choiceId === 'scissorsId') {
//     this.choice = 'scissors'
//   }
// } else if (playerName === 'computer') {
//   this.choice = this.choice[Math.floor(Math.random()*this.classicFighters.length)]
//   }



    // this.token = select from humanTokens array || '😃';
// selectToken(){
//   this.humanTokens = ['🥳', '😎', '🤠']; //have this as default token in HTML: 😃
//   this.computerToken = 🤖 ///already is in HTML
// }



// NOTES
// math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
// math.random returns a float between 0 and 1
