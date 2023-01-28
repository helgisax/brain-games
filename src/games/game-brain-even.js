import sample from '../index.js';
import { getRandomNumber } from '../instruments/instruments.js';

const letsPlayEven = () => {
  const displayRules = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const giveQuestAndAns = () => {
    const theRandomNumber = getRandomNumber(33);
    const currentAnswer = theRandomNumber % 2 === 0 ? 'yes' : 'no';
    return [
      theRandomNumber,
      currentAnswer,
    ];
  };
  sample(displayRules, giveQuestAndAns);
};
export default letsPlayEven;
