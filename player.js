class Player {
  constructor(userType, userToken) {
    this.name = userType;
    this.token = userToken; //-->need to make multiple options
    this.wins = 0;
  }
  takeTurn() {
    this.wins++;
  }
};

function getRandomElement(array) {
  return array[Math.floor(Math.random()*array.length)]
}

function randomizeClassicFighter() {
    var randomFighter = this.classicFighter[getRandomElement(fighters)];
}


// NOTES
// math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
// math.random returns a float between 0 and 1
