import evenGame from './even.js';
import calcGame from './calc.js';
import gcdGame from './gcd.js';
import progressionGame from './progression.js';

const games = {
  even: evenGame,
  calc: calcGame,
  gcd: gcdGame,
  progression: progressionGame,
};
const start = (name) => games[name];

export default start;
