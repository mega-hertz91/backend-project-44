import evenGame from './even.js';
import calcGame from './calc.js';

const games = {
  even: evenGame,
  calc: calcGame,
};
const start = (name) => games[name];

export default start;
