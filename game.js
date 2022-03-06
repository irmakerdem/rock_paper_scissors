class Game {
  constructor() {
    this.gameType = null;
    this.user1 = new Player('human');
    this.user2 = new Player('computer');
    this.isDraw = false;
    this.winner = this.determineClassicWinner();
  }
  determineGameType(gameId) {
    if (gameId === 'classicId') {
      this.gameType = 'classic';
    } else if (gameId === 'difficultId') {
      this.gameType = 'difficult'
    }
  }
//chnage name to determineWinner not just classic
  <p>🪨 > ✂️ & 🦎</p>
} else if (this.user1.choice === 'rock' && (this.user2.choice === 'scissors' || this.user2.choice === 'lizard')) {
  determineClassicWinner() {
    if (this.user1.choice === this.user2.choice) {
      this.isDraw = true
      this.winner = null
    } else if (this.user1.choice === 'rock' && this.user2.choice === 'scissors') {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1.choice === 'paper' && this.user2.choice === 'rock') {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else if (this.user1.choice === 'scissors' && this.user2.choice === 'paper') {
      this.user1.winRound()
      this.isDraw = false
      return 'human'
    } else {
      this.user2.winRound()
      this.isDraw = false
      return 'computer'
    }
    this.updateScore()
  }
  updateScore() {
  if (this.winner === 'human') {

  } else if (this.winner === 'computer') {
    this.user2.winRound()
  }
  }
};



// determineUser1Choice(choiceId) {
//   if (choiceId === 'rockId'){
//     this.user1Choice = 'rock'
//   } else if (choiceId === 'paperId') {
//     this.user1Choice = 'paper'
//   } else if (choiceId === 'scissorsId') {
//     this.user1Choice = 'scissors'
//   }
// }
// determineUser2Choice() {
//   this.user2Choice = this.classicFighters[Math.floor(Math.random()*this.classicFighters.length)]
// }


//keep score persistent when game type changes
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game (set scores to 0?)
