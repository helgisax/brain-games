import readlineSync from 'readline-sync';

const letsPlayEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const askUser = () => {
    const theRandomNumber = Math.ceil(Math.random() * 33);
    const currentAnswer = theRandomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${theRandomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    for (let i = 0; i < 3; i += 1) {
      if (currentAnswer === userAnswer) {
        console.log('Correct');
      } else if (currentAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${currentAnswer}. Let's try again, ${userName}`);
      }
      console.log(`Congratulations, ${userName}!`);
    }
  };
  askUser();
};
export default letsPlayEven;
