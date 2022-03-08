class Game {
  constructor() {
    this.gameType = 'classic';
    this.human = new Player('human');
    this.computer = new Player('computer');
    this.isDraw = false;
    this.winner = null;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard']
  }
  changeGameType(gameId) { //needed for DOM
    if (gameId === 'classic') {
      this.gameType = 'classic';
    } else if (gameId === 'difficult') {
      this.gameType = 'difficult'
    }
    console.log("click worked");
  }
  updateUserChoice() {
    if (this.gameType === 'classic') {
      this.human.takeTurnClassic();
      this.computer.takeTurnClassic();
    }
    if (this.gameType === 'difficult') {
      this.human.takeTurnDifficult();
      this.computer.takeTurnDifficult();
    }
    this.winner = this.determineWinner();
  }
  determineWinner() {
    if (this.human === this.computer) {
      this.isDraw = true
      this.winner = null
    } else if (this.human === 'rock' && (this.computer === 'scissors' || this.computer === 'lizard')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.human === 'paper' && (this.computer === 'rock' || this.computer === 'alien')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.human === 'scissors' && (this.computer === 'paper' || this.computer === 'lizard')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.human === 'lizard' && (this.computer === 'paper' || this.computer === 'alien')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.human === 'alien' && (this.computer === 'scissors' || this.computer === 'rock')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else {
      this.computer.winRound()
      this.isDraw = false
      return 'computer'
    }
  }
};


//keep score persistent when game type changes
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game (set scores to 0?)
