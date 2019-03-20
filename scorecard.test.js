const Scorecard = require('./scorecard');

// Gutter Game Feature Test

test('GutterGame Total score is 0', () => {
  var scorecard = new Scorecard();

  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);
  scorecard.roll(0);

  expect(scorecard.total).toBe(0);
});


test('increaseRollIndex increases rollIndex', () => {
  var scorecard = new Scorecard();

  scorecard.increaseRollIndex();
  expect(scorecard.rollIndex).toBe(1);
});

test('increaseRollIndex twice and rollIndex should reset', () => {
  var scorecard = new Scorecard();

  scorecard.increaseRollIndex();
  scorecard.increaseRollIndex();
  scorecard.checkFrameState()

  expect(scorecard.rollIndex).toBe(0);
});

test('increaseFrame increases frame', () => {
  var scorecard = new Scorecard();

  scorecard.increaseFrame();
  scorecard.increaseFrame();

  expect(scorecard.frameIndex).toBe(2);
});

test('roll adds pins to round', () => {
  var scorecard = new Scorecard();

  scorecard.roll(5)

  expect(scorecard.round).toEqual([5]);
});

test('roll twice, and round is added to frames', () => {
  var scorecard = new Scorecard();

  scorecard.roll(5)
  scorecard.roll(5)

  expect(scorecard.frames).toEqual([[5,5]]);
});

test('roll twice, and rollIndex is reset', () => {
  var scorecard = new Scorecard();

  scorecard.roll(5)
  scorecard.roll(5)

  expect(scorecard.rollIndex).toEqual(0);
});

test('roll twice, and rollIndex is reset', () => {
  var scorecard = new Scorecard();

  scorecard.roll(5)
  scorecard.roll(5)

  expect(scorecard.rollIndex).toEqual(0);
});

test('makeTotal provides total score', () => {
  var scorecard = new Scorecard();

  scorecard.roll(5)
  scorecard.roll(5)

  scorecard.roll(5)
  scorecard.roll(5)

  scorecard.roll(5)
  scorecard.roll(5)

  expect(scorecard.total).toEqual(30);

});

test('strike on first roll of frame, ends frame', () => {
  var scorecard = new Scorecard();

  scorecard.roll(10)

  expect(scorecard.frameIndex).toEqual(1);

});

test('strike on first roll of frame, ends frame', () => {
  var scorecard = new Scorecard();

  scorecard.roll(10)

  expect(scorecard.frameIndex).toEqual(1);

});
