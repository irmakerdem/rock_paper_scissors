class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token = null;
    this.score = 0;
    this.choice = null;
  }
  takeTurnClassic(choiceId) {
    this.choice = choiceId || this.getRandomElement(currentGame.classicFighters);
  }
  takeTurnDifficult(choiceId) {
    this.choice = choiceId || this.getRandomElement(currentGame.difficultFighters);
  }
  getRandomElement(array) {
    return array[Math.floor(Math.random()*array.length)];
  }
  winRound() {
    this.score++;
  }
};


    // this.token = select from humanTokens  array || '😃';
// selectToken(){
//   this.humanTokens = ['🥳', '😎', '🤠']; //have this as default token in HTML: 😃
//   this.computerToken = 🤖 ///already is in HTML
// }
