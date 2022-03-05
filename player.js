class Player {
  constructor(userName, userToken) {
    this.name = userName;
    this.token = userToken; //-->need to make multiple options?
    this.score = 0;
  }
  takeTurn(array) {
    return array[Math.floor(Math.random()*array.length)]
  }
};

// NOTES
// math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
// math.random returns a float between 0 and 1
