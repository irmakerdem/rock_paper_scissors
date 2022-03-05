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
  determineUser1Choice(choiceId) {
    if (choiceId === 'rockId'){
      this.user1Choice = 'rock'
    } else if (choiceId === 'paperId') {
      this.user1Choice = 'paper'
    } else if (choiceId === 'scissorsId') {
      this.user1Choice = 'scissors'
    }
  }
  determineUser2Choice() {
    this.user2Choice = this.classicFighters[Math.floor(Math.random()*this.classicFighters.length)]
  //   this.user1Choice = this.classicFighters[Math.floor(Math.random()*this.classicFighters.length)]
  }
  determineWinner() {
    if (this.user1Choice === this.user2Choice) {
      this.isDraw = true;
      this.winner = null;
    } else if (this.user1Choice === 'rock' && this.user2Choice === 'scissors') {
      this.winner = 'human';
      this.isDraw = false;
    } else if (this.user1Choice === 'paper' && this.user2Choice === 'rock') {
      this.winner = 'human';
      this.isDraw = false
    } else if (this.user1Choice === 'scissors' && this.user2Choice === 'paper') {
      this.winner = 'human';
      this.isDraw = false;
    } else {
      this.winner = 'computer';
    }
    this.updateScore();
}
  updateScore() {
  if (this.winner === 'human') {
    this.user1.takeTurn()
  } else if (this.winner === 'computer') {
    this.user2.takeTurn()
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



// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
