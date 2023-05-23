import { generateQuestions, mainLogic } from './main-logic.js';
import { MATH_SYMBOLS, MATH_OPERATIONS } from '../src/constants.js';

const calcGame = (name) => {
  const operationList = [];

  const { values, rightAnswers } = generateQuestions(
    () => [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
    (fill) => {
      const operation = MATH_SYMBOLS[Math.floor(Math.random() * 3)];
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

export default calcGame;
