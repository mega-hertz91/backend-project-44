import readlineSync from 'readline-sync';

const helloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);

  return name;
};

export default helloUser;
