class Game {
  constructor() {
    this.gameType = 'classic';
    this.human = new Player('human');
    this.computer = new Player('computer');
    this.winner = null;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard']
  }
  changeGameType(gameId) {
    if (gameId === 'classic') {
      this.gameType = 'classic';
    } else if (gameId === 'difficult') {
      this.gameType = 'difficult'
    }
  }
  updateUserChoice(choiceId) {
    if (this.gameType === 'classic') {
      this.human.takeTurnClassic(choiceId);
      this.computer.takeTurnClassic();
    }
    if (this.gameType === 'difficult') {
      this.human.takeTurnDifficult(choiceId);
      this.computer.takeTurnDifficult();
    }
    this.winner = this.determineWinner();
  }
  determineWinner() {
    if (this.human.choice === this.computer.choice) {
      this.winner = null
    } else if (this.human.choice === 'rock' && (this.computer.choice === 'scissors' || this.computer.choice === 'lizard')) {
      this.human.winRound()
      return 'human'
    } else if (this.human.choice === 'paper' && (this.computer.choice === 'rock' || this.computer.choice === 'alien')) {
      this.human.winRound()
      return 'human'
    } else if (this.human.choice === 'scissors' && (this.computer.choice === 'paper' || this.computer.choice === 'lizard')) {
      this.human.winRound()
      return 'human'
    } else if (this.human.choice === 'lizard' && (this.computer.choice === 'paper' || this.computer.choice === 'alien')) {
      this.human.winRound()
      return 'human'
    } else if (this.human.choice === 'alien' && (this.computer.choice === 'scissors' || this.computer.choice === 'rock')) {
      this.human.winRound()
      return 'human'
    } else {
      this.computer.winRound()
      return 'computer'
    }
  }
};
