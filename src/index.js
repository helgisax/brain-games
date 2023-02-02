import readlineSync from 'readline-sync';

const getGameEngine = (rules, buildRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const questAndAns = buildRoundData();
    const [question, answer] = questAndAns;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
      return;
    } if (answer === userAnswer) {
      console.log('Correct');
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default getGameEngine;
