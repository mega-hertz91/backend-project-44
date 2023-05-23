import evenGame from './even.js';
import calcGame from './calc.js';
import gcdGame from './gcd.js';
import progressionGame from './progression.js';
import primeGame from './prime.js';

const games = {
  even: evenGame,
  calc: calcGame,
  gcd: gcdGame,
  progression: progressionGame,
  prime: primeGame,
};
const start = (name) => games[name];

export default start;
