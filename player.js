class Player {
  constructor() {
    this.fighters = ["rock", "paper", "scissors"];
    this.name = ;
    this.token = ;
    this.wins = 0;
  }
  takeTurn() {

  }
};


//make function that generates a random item from array

//returns random index value
//math.floor returns  a whole number (rounds down) --> whole # is needed to access index in array
//math.random returns a float between 0 and 1
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//returns value in array
function getRandomElement(array) {
  return array[Math.floor(Math.random()*array.length)]
}

function randomizeFighter() {
  getRandomElement(fighters)
}

function displayFighter() {

}
