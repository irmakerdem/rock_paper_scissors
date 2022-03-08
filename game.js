class Game {
  constructor() {
    this.gameType = 'classic';
    this.user1 = new Player('human');
    this.user2 = new Player('computer');
    this.user1Choice = null;
    this.user2Choice = null;
    this.isDraw = false;
    this.winner = null;
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
      this.user1Choice = this.user1.takeTurnClassic();
      this.user2Choice = this.user2.takeTurnClassic();
    }
    if (this.gameType === 'difficult') {
      this.user1Choice = this.user1.takeTurnDifficult();
      this.user2Choice = this.user2.takeTurnDifficult();
    }
    this.winner = this.determineWinner();
  }
  determineWinner() {
    if (this.user1Choice === this.user2Choice) {
      this.isDraw = true
      this.winner = null
    } else if (this.user1Choice === 'rock' && (this.user2Choice === 'scissors' || this.user2Choice === 'lizard')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1Choice === 'paper' && (this.user2Choice === 'rock' || this.user2Choice === 'alien')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1Choice === 'scissors' && (this.user2Choice === 'paper' || this.user2Choice === 'lizard')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1Choice === 'lizard' && (this.user2Choice === 'paper' || this.user2Choice === 'alien')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1Choice === 'alien' && (this.user2Choice === 'scissors' || this.user2Choice === 'rock')) {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else {
      this.user2.winRound()
      this.isDraw = false
      return 'computer'
    }
  }
};


//keep score persistent when game type changes
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game (set scores to 0?)
