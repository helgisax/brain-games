import readlineSync from 'readline-sync';

const letsPlayEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const theRandomNumber = Math.ceil(Math.random() * 33);
  console.log(`Question: ${theRandomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  if (theRandomNumber % 2 === 0 || userAnswer === 'yes') {
    console.log('Correct!');
  } else if (!theRandomNumber % 2 === 0 || userAnswer === 'no') {
    console.log('Correct!');
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}'`);
  }
};
export default letsPlayEven;
