const Scorecard = require('./scorecard');

// Gutter Game Feature Test

test('GutterGame Total score is 0', () => {
  var scorecard = new Scorecard();

  scorecard.bowl(0,0)
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);
  scorecard.bowl(0,0);

  expect((scorecard.Total).toBe(0));
});
