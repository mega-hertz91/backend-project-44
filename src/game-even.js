import readlineSync from 'readline-sync';

const logicEvenGame = (name) => {
  const items = [];
  const answers = {
    yes: true,
    no: false,
  };

  for (let i = 0; i < 3; i += 1) {
    items.push(Math.floor(Math.random() * 100));
  }

  const userAnswers = [];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < items.length; i += 1) {
    // Check even, return boolean
    const item = (items[i] % 2) === 0;
    const answer = readlineSync.question(`Question: ${items[i]}  `);

    // Write result user answer and even number
    if (answers[answer] !== undefined) {
      userAnswers.push(answers[answer] === item);
    } else {
      userAnswers.push(false);
    }

    // Display answer
    console.log(`You answer: ${answer}`);
    console.log(answers[answer] === item ? 'Correct!' : 'Incorrect!');
  }

  if (userAnswers.filter((item) => item !== true).length !== 0) {
    console.log(`Try again, ${name} :(`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicEvenGame;
