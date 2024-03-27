// For testing how elo ratings go between random matchups over a series of contests.

import Elo from '@pelevesque/elo'

const combatants = {}

combatants.a = {
  name: "a",
  score: 1800,
  bonus: 1,
}

combatants.b = {
  name: "b",
  score: 1500,
  bonus: 0,
}

const elo = new Elo();
console.log(elo.getExpectedScore(2000, 1500));

const outcomeObject = elo.getOutcome(2000, 1600, 0);
console.log(outcomeObject);

export { combatants };