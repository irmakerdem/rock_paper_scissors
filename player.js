class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token = null;
    this.score = 0;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    // this.choiceClass = this.takeTurnClassic();
    // this.choiceDifficult = this.takeTurnDifficult();
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
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


    // this.token = select from humanTokens array || '😃';
// selectToken(){
//   this.humanTokens = ['🥳', '😎', '🤠']; //have this as default token in HTML: 😃
//   this.computerToken = 🤖 ///already is in HTML
// }
