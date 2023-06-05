import { generateQuestions, mainLogic } from './main-logic.js';
import { randomNumber } from '../utils.js';

export default (name) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

  const { values, rightAnswers } = generateQuestions(
    () => randomNumber(30),
    (fill) => (isPrime(fill) ? 'yes' : 'no'),
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
