class Scorecard {

  constructor() {
    this.frames = 10;
    this.total = 0;
  }

  frame(roll1,roll2) {
    this.total =+ (roll1 + roll2)
    this.frames -= 1 
  }

}

module.exports = Scorecard;
