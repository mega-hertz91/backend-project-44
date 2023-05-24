import { generateQuestions, mainLogic } from './main-logic.js';
import { randomNumber } from '../utils.js';

export default (name) => {
  const nod = (n, m) => {
    if (m > 0) {
      const k = n % m;
      return nod(m, k);
    }

    return Math.abs(n);
  };

  const { values, rightAnswers } = generateQuestions(
    () => [
      randomNumber(100),
      randomNumber(100),
    ],
    (fill) => nod(fill[0], fill[1]),
  );

  console.log('What is the result of the expression?');

  mainLogic(
    values,
    rightAnswers,
    name,
    (index) => `${values[index][0]} ${values[index][1]}`,
    (answer) => Number(answer),
  );
};
