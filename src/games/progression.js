import { generateQuestions, mainLogic } from './main-logic.js';
import { randomNumber } from '../utils.js';

const MATH_PROGRESS_ITEM = 8;

export default (name) => {
  const arrayQuestion = (items, answer) => {
    const result = [];

    for (let item = 0; item < items.length; item += 1) {
      if (items[item] !== answer) {
        result.push(items[item]);
      } else {
        result.push('..');
      }
    }

    return result;
  };

  const generateItemNumbers = (start = 0, step = 1) => {
    const result = [];

    for (let i = start; i < (start + MATH_PROGRESS_ITEM); i += 1) {
      result.push(i * step);
    }

    return result;
  };

  const numberItems = generateItemNumbers(
    randomNumber(30),
    randomNumber(3, 'ceil'),
  );

  const { values, rightAnswers } = generateQuestions(
    () => numberItems,
    (fill) => fill[randomNumber(MATH_PROGRESS_ITEM)],
  );

  console.log('What number is missing in the progression?');

  mainLogic(
    values,
    rightAnswers,
    name,
    (index, rightAnswer) => `${arrayQuestion(numberItems, rightAnswer).join(' ')}`,
    (answer) => Number(answer),
  );
};
