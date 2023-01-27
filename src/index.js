import readlineSync from 'readline-sync';

const sample = (displayRules, giveQuestAndAns) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  displayRules();

  const checkTheGame = () => {
    for (let i = 0; i < 3; i += 1) {
      const questAndAns = giveQuestAndAns();
      console.log(`Question: ${questAndAns[0]}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (questAndAns[1] === userAnswer) {
        console.log('Correct');
      } else if (questAndAns[1] !== userAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questAndAns[1]}.\nLet's try again, ${userName}`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  checkTheGame();
};
export default sample;
