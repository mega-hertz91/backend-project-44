import readlineSync from 'readline-sync';
import { GAME_ROUND_COUNT } from '../constants.js';

const generateQuestions = (cbValues, cbAnswers) => {
  const values = [];
  const rightAnswers = [];

  // Generate question values
  for (let i = 0; i < GAME_ROUND_COUNT; i += 1) {
    const fill = cbValues();
    values.push(fill);
    rightAnswers.push(cbAnswers(fill));
  }

  return { values, rightAnswers };
};

const mainLogic = (values, rightAnswers, name, cbQuestion, cbValueType) => {
  const userAnswers = [];

  for (let i = 0; i < values.length; i += 1) {
    // Ask question
    const answer = readlineSync.question(`Question: ${cbQuestion(i, rightAnswers[i])}  `);

    const answerValue = rightAnswers[i] === cbValueType(answer);

    // Write result user answer and even number
    if (answer !== undefined) {
      userAnswers.push(answerValue);
    } else {
      userAnswers.push(false);
    }

    // Display answer
    console.log(`You answer: ${cbValueType(answer)}`);
    console.log(answerValue ? 'Correct!' : `'${cbValueType(answer)}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.`);
  }

  if (userAnswers.filter((item) => item !== true).length !== 0) {
    console.log(`Let's try again, ${name} :(`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export { generateQuestions, mainLogic };
