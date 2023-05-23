import { generateQuestions, mainLogic } from './main-logic.js';

const evenGame = (name) => {
  const { values, rightAnswers } = generateQuestions(
    () => Math.floor(Math.random() * 100),
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

export default evenGame;
