import { generateQuestions, mainLogic } from './main-logic.js';
import { randomNumber } from '../utils.js';

export default (name) => {
  const { values, rightAnswers } = generateQuestions(
    () => randomNumber(100),
    (fill) => ((fill % 2) === 0 ? 'yes' : 'no'),
  );
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  mainLogic(
    values,
    rightAnswers,
    name,
    (index) => values[index],
    (answer) => String(answer),
  );
};
