class Player {
  constructor(playerName) {
    this.name = playerName;
    this.score = 0;
    this.choice = null;
    this.tokens = ['😃', '🥳', '😹', '😎', '🦊', '🤠', '🌞'];
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
