const Scorecard = require('./scorecard');

// New scorecard has ten rounds

// beforeEach(() => {
//   var scorecard = new Scorecard();
// });

test('New scorecard has ten rounds', () => {
  var scorecard = new Scorecard();
  expect((scorecard.frames)).toBe(10);
});
