class Player {
  constructor(playerName) {
    this.name = playerName;
    // 'human' || 'computer';
    // this.token = select from humanTokens array || '😃';
    this.score = 0;
  }
};
//   selectToken(){
//     this.humanTokens = ['🥳', '😎', '🤠']; //have this as default token in HTML: 😃
//     this.computerToken = 🤖 ///already is in HTML
//   }
//   takeTurn(array) {
//     if (player === 'human') {
//       allow human to choose 1 of 3 fighters in classicFighters array
//     } else {
//     return array[Math.floor(Math.random()*array.length)]
//   }
// };

// NOTES
// math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
// math.random returns a float between 0 and 1
