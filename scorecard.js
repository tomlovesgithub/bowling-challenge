class Scorecard {

  constructor() {
    this.frames = []
    this.rollIndex = 0
    this.frameIndex = 0
    this.round = []
    this.total;
  }

  roll(pins){
    if (pins == 10) {
      this.increaseFrame()
    }
    this.round.push(pins)
    this.checkFrameState()
  }

  makeTotal() {
    this.total = this.frames.flat().reduce(function(a, b) {
      return a + b;
    }, 0)
  }

  increaseFrame() {
    this.frameIndex += 1
    this.makeTotal()
  }

  increaseRollIndex() {
    this.rollIndex += 1
  }

  checkFrameState() {
    if (this.rollIndex < 1) {
      this.increaseRollIndex()
    } else {
      this.rollIndex = 0
      this.resetRound()
    }
  }

  resetRound() {
    this.frames.push(this.round)
    this.round = []
    this.increaseFrame()
  }

}

module.exports = Scorecard;
