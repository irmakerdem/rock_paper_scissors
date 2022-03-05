class Player {
  constructor(playerName) {
    this.name = playerName;
    // this.token = select from humanTokens array || '😃';
    this.score = 0;
  }
  // selectToken(){
  //   this.humanTokens = ['🥳', '😎', '🤠']; //have this as default token in HTML: 😃
  //   this.computerToken = 🤖 ///already is in HTML
  // }
  takeTurn() {
    this.score++;
}
};

// NOTES
// math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
// math.random returns a float between 0 and 1
