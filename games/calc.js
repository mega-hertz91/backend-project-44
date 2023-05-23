import { generateQuestions, mainLogic } from './main-logic.js';
import { MATH_SYMBOLS, MATH_OPERATIONS } from '../src/constants.js';
import { randomNumber } from '../src/utils.js';

export default (name) => {
  const operationList = [];

  const { values, rightAnswers } = generateQuestions(
    () => [
      randomNumber(100),
      randomNumber(100),
    ],
    (fill) => {
      const operation = MATH_SYMBOLS[randomNumber(MATH_SYMBOLS.length)];
      operationList.push(operation);
      return MATH_OPERATIONS[operation](fill[0], fill[1]);
    },
  );

  console.log('What is the result of the expression?');

  mainLogic(
    values,
    rightAnswers,
    name,
    (index) => `${values[index][0]} ${operationList[index]} ${values[index][1]}`,
    (answer) => Number(answer),
  );
};
