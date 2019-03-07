const Scorecard = require('./scorecard');

// Gutter Game Feature Test

test('GutterGame Total score is 0, No frames remain', () => {
  var scorecard = new Scorecard();

  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);

  expect(scorecard.total).toBe(0);
  expect(scorecard.frames).toBe(0);
});

test('GutterGame bar one pin, Total score is 1, No frames remain', () => {
  var scorecard = new Scorecard();

  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,0);
  scorecard.frame(0,1);

  expect(scorecard.total).toBe(1);
  expect(scorecard.frames).toBe(0);

});

test('frame function reduces frames attribute by one', () => {
  var scorecard = new Scorecard();

  scorecard.frame(0,0);

  expect(scorecard.frames).toBe(9);
});
