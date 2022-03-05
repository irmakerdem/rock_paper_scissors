class Game {
  constructor() {
    this.gameType = null;
    this.classicFighters = ['rock', 'paper', 'scissors'];
    this.user1 = new Player ('Irmak');
    this.user2 = new Player ('computer');
    this.user1Choice = null;
    this.user2Choice = null;
    this.isDraw = false;
    this.winner = null;
    // this.difficultFighters = ["rock", "paper", "scissors", "alien", "lizard"];
  }
  determineGameType(gameId) {
    if (gameId === 'classicId') {
      this.gameType = 'classic';
    } else if (gameId === 'difficultId'){
      this.gameType = 'difficult'
    }
  }
};
  // setupClassicGame() {
  //   //make two player instances (both computers for now)
  //   //use this.score in player to do score++
  //   //keep score persistent
  // }
  // startClassicGame() {
  //
  // }
  // setupDifficultGame() {
  //   //make two player instances (both computers for now)
  //   //use this.score in player to do score++
  //   //keep score persistent
  // }
  // startDifficultGame() {
  //
  // }

// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
